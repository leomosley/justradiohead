"use client";

import clsx from 'clsx';
import React, { useState } from 'react'
import { HiCheck, HiPencil, HiX } from 'react-icons/hi';
import { Links } from '@prisma/client';

export default function LinkRow({
  link
} : {
  link: Links;
}) {
  const [text, setText] = useState<string>(link.text);
  const [url, setUrl] = useState<string>(link.url);
  const [editing, setEditing] = useState<boolean>(false);

  const toggleEditing = () => {
    setText(link.text);
    setUrl(link.url);
    setEditing(prev => !prev);
  }

  const submit = () => {
    console.log('submit');
  }

  return (
    <div className="flex justify-between p-2 border-b border-neutral-600 gap-2 text-neutral-200">
      <input 
        className="bg-neutral-950 outline-none"
        value={text}
        onChange={(e) => setText(e.currentTarget.value)}
        disabled={!editing}
      />
      <input 
        className="bg-neutral-950 outline-none disabled:overflow-ellipsis"
        value={!editing ? url.split("https://")[1] : url}
        onChange={(e) => setUrl(e.currentTarget.value)}
        disabled={!editing}
      />
      <div className="flex">
        <button
          className={clsx(
            "flex",
            editing
              ? " opacity-100 cursor-pointer"
              : "opacity-0 cursor-default"
          )}
          disabled={!editing}
          onClick={submit}
        >
          <HiCheck className="w-5 h-5" />
        </button>
        <button
          className="flex"
          onClick={toggleEditing}
        >
          {editing ? (
            <HiX  className="w-5 h-5"/>
          ) : (
            <HiPencil className="w-5 h-5"/>
          )}      
        </button>
      </div>
    </div>
  );
}
