"use client"

import { useAppState } from '@/state';
import clsx from 'clsx';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { HiCheck, HiOutlineTicket, HiPencil, HiPlus, HiPlusCircle, HiX } from 'react-icons/hi';
import LoadingSpinner from './LoadingSpinner';
import DateInput from './DateInput';

export default function AddShowItem() {
  const { data: session, status } = useSession();
  const { onDashboard } = useAppState();

  const [date, setDate] = useState<string>("01/01/2024");
  const [title, setTitle] = useState<string>("");
  const [venue, setVenue] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [tickectLink, setTicketLink] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [preview, setPreview] = useState<boolean>(false);

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const toggleOpen = () => {
    setDate("01/01/2024");
    setTitle("");
    setVenue("");
    setLocation("");
    setTicketLink("");
    setPreview(false);
    setOpen(prev => !prev);
  }

  const submit = () => {
    setLoading(true);
    let data = {
      date: date,
      title: title,
      venue: venue,
      location: location,
      tickectLink: tickectLink,
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
        <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full">
          <div className="flex flex-col p-1">
            <label className="text-lg font-semibold mb-2">Date</label>
            <DateInput
              autoFocus
              initialDate={date}
              value={date}
              onChange={setDate}
            />
          </div>
          <div className="flex flex-col p-1">
            <label className="text-lg font-semibold mb-2">Title</label>
            <input 
              className="outline-none bg-transparent text-neutral-300"
              value={title}
              onChange={(e) => setTitle(e.currentTarget.value)}
            />
          </div>
          <div className="flex flex-col p-1">
            <label className="text-lg font-semibold mb-2">Location</label>
            <textarea 
              className="outline-none bg-transparent resize-none text-neutral-300"
              value={location}
              onChange={(e) => setLocation(e.currentTarget.value)}
            />
          </div>
          <div className="flex flex-col p-1">
            <label className="text-lg font-semibold mb-2">Ticket Link</label>
            <textarea 
              className="outline-none bg-transparent resize-none text-neutral-300"
              value={tickectLink}
              onChange={(e) => setTicketLink(e.currentTarget.value)}
            />
          </div>
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
                className="bg-neutral-200 px-4 py-1 rounded justify-center mr-2"
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
          <HiPlus className="w-6 h-6"/>
        </button>
      )}
      {preview && (
        <div className="flex w-full gap-2 items-center justify-between px-2 py-2 sm:py-4">
          <div className="flex w-16 gap-0.5 items-baseline">
            <span className="text-xl">{date.slice(0, 2)}</span>
            <span className="text-sm">{months[Number(date.slice(3, 5))-1]}</span>
          </div>
          <span className="flex-1 text-md">{title}</span>
          <span 
            className={clsx(
              "flex-1 text-xs sm:text-sm text-balance",
              onDashboard
                ? "text-neutral-100"
                : "text-neutral-800"
            )}
          >
            {location}
          </span>
          <a 
            className={clsx(
              "flex items-center gap-2 p-1.5 rounded",
              "hover:text-neutral-100 hover:bg-red-700 transition duration-150 cursor-pointer"
            )}
            target="_blank"
            href={tickectLink}
          >
            <span className="hidden lg:block text-md">Tickets</span>
            <HiOutlineTicket className="w-5 h-5" />
          </a>
        </div>
      )}
    </div>
  );
}