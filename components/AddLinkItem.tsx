"use client"

import { useAppState } from '@/state';
import clsx from 'clsx';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { HiCheck, HiOutlineTicket, HiPencil, HiPlus, HiPlusCircle, HiX } from 'react-icons/hi';
import LoadingSpinner from './LoadingSpinner';
import { useRouter } from 'next/navigation';
import createLink from '@/utils/links/createLink';

export default function AddLinkItem() {
  const { data: session, status } = useSession();
  const { onDashboard } = useAppState();
  const router = useRouter();

  const [text, setText] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [preview, setPreview] = useState<boolean>(false);

  const toggleOpen = () => {
    setText("");
    setUrl("");
    setPreview(false);
    setOpen(prev => !prev);
  }

  const submit = async () => {
    setLoading(true);
    let data = {
      text: text,
      url: url
    }
    try {
      const response = await createLink(data);
      
      if (response && response.ok) {
        toggleOpen(); 
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  return (onDashboard && status === "authenticated") && (
    <div className={clsx(
      "flex flex-col gap-2 items-center",
      "bg-neutral-900/50 rounded-md",
      open && "px-2 py-2 sm:py-4"
    )}>
      {open ? (
        <div className="grid grid-cols-2 grid-rows-1 gap-2 w-full">
          <div className="flex flex-col p-1">
            <label className="text-lg font-semibold mb-2 text-neutral-100">Text</label>
            <input 
              className="outline-none bg-transparent text-neutral-300"
              value={text}
              onChange={(e) => setText(e.currentTarget.value)}
              autoFocus
            />
          </div>
          <div className="flex flex-col p-1">
            <label className="text-lg font-semibold mb-2 text-neutral-100">Link</label>
            <textarea 
              className="outline-none bg-transparent resize-none text-neutral-300"
              value={url}
              onChange={(e) => setUrl(e.currentTarget.value)}
            />
          </div>
          {preview && (
            <div className="flex flex-col">
              <span className="font-semibold text-neutral-100">Preview</span>
              <a
                className="group cursor-pointer p-1 w-fit"
                key={url}
                href={url}
                target="_blank"
              >
                <span className="text-neutral-100 font-semibold text-lg tracking-tight transition duration-100 group-hover:text-neutral-500">{text}</span>
              </a>            
            </div>
          )}
          <div className="flex items-end justify-between gap-2 col-span-2 h-fit">
            <button
              className="bg-neutral-800 px-4 py-1 rounded justify-center"
              onClick={toggleOpen}
              disabled={loading}
            >
              <span className="text-neutral-200 font-bold">Cancel</span>
            </button>
            <div>
              <button
                className="bg-white px-4 py-1 rounded justify-center mr-2"
                onClick={() => setPreview(p => !p)}
                disabled={loading}
              >
                <span className="text-neutral-950 font-bold">Preview</span>
              </button>
              <button
                className="bg-red-700 px-4 py-1 rounded justify-center"
                onClick={submit}
                disabled={loading}
              >
                {loading 
                  ? <div className="w-14 h-6"><LoadingSpinner /></div>
                  : <span className="text-neutral-200 font-bold">Submit</span>
                }
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          className={clsx(
            "flex w-full justify-center rounded text-neutral-700 px-2 py-2 sm:py-4",
            "hover:text-neutral-100 transition duration-150 cursor-pointer"
          )}
          onClick={toggleOpen}
          disabled={loading}
        >
          <HiPlus className="w-5 h-5"/>
        </button>
      )}
    </div>
  );
}