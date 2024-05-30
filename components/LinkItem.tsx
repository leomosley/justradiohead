"use client";

import clsx from 'clsx';
import React, { useState } from 'react'
import { HiOutlineTrash, HiPencil, HiTrash } from 'react-icons/hi';
import { Links } from '@prisma/client';
import { useSession } from 'next-auth/react';
import { useAppState } from '@/state';
import LoadingSpinner from './LoadingSpinner';
import updateLink from '@/utils/links/updateLink';
import { useRouter } from 'next/navigation';
import deleteLink from '@/utils/links/deleteLink';

export default function LinkItem({
  link
} : {
  link: Links;
}) {
  const { data: session, status } = useSession();
  const { onDashboard } = useAppState();
  const router = useRouter();

  const [text, setText] = useState<string>(link.text);
  const [url, setUrl] = useState<string>(link.url);
  const [editing, setEditing] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const toggleEditing = (updated?: boolean) => {
    if (!updated) {
      setText(link.text);
      setUrl(link.url);
    }
    setEditing(prev => !prev);
  }

  const submit = async () => {
    setLoading(true);
    let data = {
      text: text,
      url: url,
    }
    try {
      const response = await updateLink(link.id, data);
      
      if (response && response.ok) {
        toggleEditing(true);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  const deleteItem = async () => {
    setLoading(true);
    try {
      const response = await deleteLink(link.id);
      
      if (response && response.ok) {
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  return (
    <div className={clsx(
      "flex items-center justify-between text-neutral-200",
      onDashboard && "p-2 bg-neutral-900/50 rounded-md mb-2"
    )}>
      {editing ? (
        <div className="grid grid-cols-2 grid-rows-1 gap-2 w-full">
          <div className="flex flex-col p-1">
            <label className="text-lg font-semibold mb-2">Title</label>
            <input 
              className="outline-none bg-transparent text-neutral-300"
              value={text}
              onChange={(e) => setText(e.currentTarget.value)}
            />
          </div>
          <div className="flex flex-col p-1">
            <label className="text-lg font-semibold mb-2">Location</label>
            <textarea 
              className="outline-none bg-transparent resize-none text-neutral-300"
              value={url}
              onChange={(e) => setUrl(e.currentTarget.value)}
            />
          </div>
          <div className="flex items-end justify-between sm:justify-end gap-2 col-span-2 h-fit">
            <button
              className="bg-neutral-800 px-4 py-1 rounded justify-center"
              onClick={() => toggleEditing()}
              disabled={loading}
            >
              <span className="text-neutral-200 font-bold">Cancel</span>
            </button>
            <button
              className="bg-red-700 px-4 py-1 rounded justify-center"
              onClick={submit}
              disabled={loading}
            >
              {loading 
                ? <div className="w-14 h-6"><LoadingSpinner/></div>
                : <span className="text-neutral-200 font-bold">Submit</span>
              }
            </button>
          </div>
        </div>
      ) : (
        <>
        <a
          className="group cursor-pointer p-1 w-fit"
          key={link.url}
          href={link.url}
          target="_blank"
        >
          <span className="text-neutral-100 font-semibold text-lg tracking-tight transition duration-100 group-hover:text-neutral-500">{link.text}</span>
        </a>
        {(status === "authenticated" && onDashboard) && (
          <div className="flex gap-1.5 pl-2 border-l-2 border-l-neutral-800">
            <button
              className="flex p-1.5 rounded hover:bg-red-700 transition duration-150 cursor-pointer"
              onClick={deleteItem}
              disabled={loading}
            >
              <HiOutlineTrash className="w-5 h-5"/>
            </button>
            <button
              className="flex p-1.5 rounded hover:bg-red-700 transition duration-150 cursor-pointer"
              onClick={() => toggleEditing()}
              disabled={loading}
            >
              <HiPencil className="w-5 h-5"/>
            </button>
          </div>
        )}
        </>
      )}
    </div>
  );
}
