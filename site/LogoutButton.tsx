"use client";

import React from 'react'
import { signOut } from 'next-auth/react'

export default function LogoutButton() {
  return (
    <button
      className="bg-red-700 px-8 py-2"
      onClick={() => signOut()}
    >
      <span className="text-neutral-200 text-lg font-bold">
        Logout
      </span>
    </button>
  )
}
