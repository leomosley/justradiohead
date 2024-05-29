"use client"

import { Show } from '@prisma/client';
import clsx from 'clsx';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { HiOutlineTicket } from 'react-icons/hi';

export default function ShowItem({
  show,
} : {
  show: Show;
}) {
  const pathname = usePathname();
  const { data: session } = useSession();

  const [date, setDate] = useState<string>(show.date);
  const [title, setTitle] = useState<string>(show.title);
  const [venue, setVenue] = useState<string>(show.venue);
  const [location, setLocation] = useState<string>(show.location);
  const [tickectLink, setTicketLink] = useState<string>(show.ticketLink);
  
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];


  return (
    <div className="flex gap-2 items-center px-2 py-2 sm:py-4 border-b border-b-neutral-950">
      <div className="flex w-16 gap-0.5 items-baseline">
        <span className="text-xl">{date.slice(0, 2)}</span>
        <span className="text-sm">{months[Number(date.slice(3, 5))]}</span>
      </div>
      <span className="flex-1 text-md">{title}</span>
      <span className="flex-1 text-xs sm:text-sm text-balance text-neutral-800">{location}</span>
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
  );
}
