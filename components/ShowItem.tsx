"use client"

import { useAppState } from '@/state';
import { Show } from '@prisma/client';
import clsx from 'clsx';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { HiCheck, HiOutlineTicket, HiPencil, HiX } from 'react-icons/hi';
import LoadingSpinner from './LoadingSpinner';
import DateInput from './DateInput';

export default function ShowItem({
  show,
} : {
  show: Show;
}) {
  const { data: session, status } = useSession();
  const { onDashboard } = useAppState();

  const [date, setDate] = useState<string>(show.date);
  const [title, setTitle] = useState<string>(show.title);
  const [venue, setVenue] = useState<string>(show.venue);
  const [location, setLocation] = useState<string>(show.location);
  const [tickectLink, setTicketLink] = useState<string>(show.ticketLink);
  const [editing, setEditing] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const toggleEditing = () => {
    setDate(show.date);
    setTitle(show.title);
    setVenue(show.venue);
    setLocation(show.location);
    setTicketLink(show.ticketLink);
    setEditing(prev => !prev);
  }

  const submit = () => {
    setLoading(true);
    setLoading(false);
  }

  return (
    <div className={clsx(
      "flex gap-2 items-center px-2 py-2 sm:py-4",
      onDashboard
        ? "bg-neutral-900/50 rounded-md"
        : "border-b border-b-neutral-950"
    )}>
      {editing ? (
        <div className="grid grid-cols-2 grid-rows-3 gap-2 w-full">
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
          <div className="flex items-end justify-between sm:justify-end gap-2 col-span-2">
            <button
              className="bg-neutral-800 px-4 py-1 rounded justify-center"
              onClick={toggleEditing}
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
                ? <div className="w-14 h-6"><LoadingSpinner /></div>
                : <span className="text-neutral-200 font-bold">Submit</span>
              }
            </button>
          </div>
        </div>
      ) : (
        <>
        <div className="flex w-16 gap-0.5 items-baseline">
          <span className="text-xl">{date.slice(0, 2)}</span>
          <span className="text-sm">{months[Number(date.slice(3, 5))]}</span>
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
        {(status === "authenticated" && onDashboard) && (
          <button
            className="flex p-1.5 rounded hover:bg-red-700 transition duration-150 cursor-pointer"
            onClick={toggleEditing}
            disabled={loading}
          >
            <HiPencil className="w-5 h-5"/>
          </button>
        )}
        </>
      )}
    </div>
  );
}
