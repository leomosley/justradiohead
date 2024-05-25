"use client";

import React from 'react'
import { signOut } from 'next-auth/react'
import clsx from 'clsx';

export default function LogoutButton({
  className,
} : {
  className?: string;
}) {
  return (
    <button
      className={clsx(
        "bg-red-700 px-8 py-2",
        className
      )}
      onClick={() => signOut()}
    >
      <span className="text-neutral-200 text-lg font-bold">
        Logout
      </span>
    </button>
  )
}
