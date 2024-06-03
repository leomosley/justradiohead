"use client";

import UploadDropzone from '@/components/UploadDropzone';
import { Collection } from '@prisma/client'
import clsx from 'clsx';
import React, { useState } from 'react'

export default function ImageUploadForm({
  collections
} : {
  collections?: Collection[];
}) {
  const [name, setName] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [collects, setCollects] = useState<{ id: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSelectCollection = (collection: { id: string }) => {
    if (collects.some(item => item.id === collection.id)) {
      setCollects(prev => prev.filter(item => item.id !== collection.id));
    } else {
      setCollects(prev => [...prev, collection]);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-neutral-200 text-lg font-semibold">Name</label>
          <input 
            className="outline-none bg-neutral-900 p-2 rounded-lg text-neutral-200"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            type="text"
            disabled={loading}
          />
          <label className="text-neutral-200 text-lg font-semibold">Description</label>
          <textarea 
            className="resize-none outline-none bg-neutral-900 p-2 rounded-lg text-neutral-200 h-full min-h-[120px]"
            value={desc}
            onChange={(e) => setDesc(e.currentTarget.value)}
            disabled={loading}
          />
        </div>
        <UploadDropzone
          name={name}
          description={desc}
          endpoint="imageUploader"
          collections={collects}
          setLoading={setLoading}
          refresh={true}
        /> 
      </div>
      <div className="flex gap-2">
        {collections && collections.map((collection) => (
          <button
            className={clsx(
              "bg-neutral-900 p-2 border rounded-lg",
              collects.some(item => item.id === collection.id)
                ? "border-neutral-200 text-neutral-200"
                : "border-neutral-900 text-neutral-300"
            )}
            onClick={() => handleSelectCollection({ id: collection.id })}
            disabled={loading}
          >
            {collection.title}
          </button>
        ))}
      </div>
    </div>
  );
}
