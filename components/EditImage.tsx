"use client";

import React, { useState } from 'react'
import { Collection, Images } from '@prisma/client'
import Image from 'next/image';
import DeleteImageButton from './DeleteImageButton';
import updateImage from '@/utils/images/updateImage';
import { useRouter } from 'next/navigation';
import { ImagesWithCollections } from '@/types';

export default function EditImage({
  image
} : {
  image: ImagesWithCollections;
}) {
  const router = useRouter();
  const [name, setName] = useState<string>(image.name);
  const [desc, setDesc] = useState<string>(image.description);
  const [collects, setCollects] = useState<Collection[]>(image.collections);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSelectCollection = (collection: Collection) => {
    if (collects.some(item => item.id === collection.id)) {
      setCollects(prev => prev.filter(item => item.id !== collection.id));
    } else {
      setCollects(prev => [...prev, collection]);
    }
  }

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const response = await updateImage(image.id, {
        name: name,
        description: desc,
        imageURL: image.imageURL,
        collections: collects
      });

      if (!response || !response.ok) {
        throw new Error("Error updating image information")
      } else {
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }
  return (
    <div className="flex gap-2 flex-col sm:flex-row">
      <Image
        className=""
        src={image.imageURL}
        width={500}
        height={500}
        alt={image.name}
      />
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
          className="resize-none outline-none bg-neutral-900 p-2 rounded-lg text-neutral-200"
          value={desc}
          onChange={(e) => setDesc(e.currentTarget.value)}
          disabled={loading}
        />
        <div className="flex mt-auto justify-between">
          <button
            className="p-2 rounded bg-white"
            onClick={handleUpdate}
            disabled={loading}
          >
            <span className="font-bold text-neutral-950">Update</span>
          </button>
          <DeleteImageButton 
            id={image.id}
            disabled={loading}  
          />
        </div>
      </div>
    </div>
  );
}
