"use client";
import React, { useState, useEffect } from "react";
import { ImagesWithCollections } from "@/types";
import getImages from "@/utils/images/getImages";
import clsx from "clsx";
import LoadingSpinner from "@/components/LoadingSpinner";
import createColection from "@/utils/collections/createCollection";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [selectedImages, setSelectedImages] = useState<{ id: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [images, setImages] = useState<ImagesWithCollections[]>([]);

  useEffect(() => {
    setLoading(true);
    const getResponse = async () => {
      const res = await getImages();
      setImages(res || []);
    }
    getResponse();
    setLoading(false);
  }, []);
  
  const handleSumbit = async () => {
    setLoading(true);
    const response = await createColection(title, desc, selectedImages);
    if (response && response.ok) {
      let res = await response.json();
      router.push("/dashboard/gallery/collections/" + res.id);
    }
    setLoading(false);
  }

  const handleSelectImage = (image: { id: string }) => {
    if (selectedImages.some(item => item.id === image.id)) {
      setSelectedImages(prev => prev.filter(item => item.id !== image.id));
    } else {
      setSelectedImages(prev => [...prev, image]);
    }
  }

  return (
    <div className="flex flex-col gap-2 max-w-[500px]">
      <div className="flex flex-col gap-2">
        <label className="text-neutral-200 text-lg font-semibold">Title</label>
        <input 
          className="outline-none bg-neutral-900 p-2 rounded-lg text-neutral-200"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
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
      <label className="text-neutral-200 text-lg font-semibold">Images</label>
      <div className="flex gap-2 flex-wrap py-2">
        {images && images.map((image) => (
          <button
            className={clsx(
              "bg-neutral-900 p-2 border rounded-lg",
              selectedImages.some(item => item.id === image.id)
                ? "border-neutral-200 text-neutral-200"
                : "border-neutral-900 text-neutral-300"
            )}
            onClick={() => handleSelectImage({ id: image.id })}
            disabled={loading}
          >
            {image.name}
          </button>
        ))}
      </div>
      <div className="flex justify-end">
        <button
          className="bg-red-700 px-4 py-1 rounded justify-center"
          onClick={handleSumbit}
          disabled={loading}
        >
          {loading 
            ? <div className="w-14 h-6"><LoadingSpinner/></div>
            : <span className="text-neutral-200 font-bold">Submit</span>
          }
        </button>
      </div>
    </div>
  );
}
