"use client";

import React, { SetStateAction } from 'react'
import { UTUploadDropzone } from "@/utils/uploadthing";
import { Endpoints } from '@/app/api/uploadthing/core';
import createImage from '@/utils/images/createImage';
import { useRouter } from 'next/navigation';

export default function UploadDropzone({
  endpoint,
  name,
  description="...",
  collections,
  setLoading,
  refresh=false
} : {
  endpoint: Endpoints;
  name: string;
  description?: string;
  collections?: { id: string}[];
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  refresh?: boolean;
}) {
  const router = useRouter();
  return (
    <UTUploadDropzone
      className="cursor-pointer ut-button:bg-red-700 ut-button:ut-uploading:after:bg-red-700/50 p-4 bg-neutral-900 ut-label:text-neutral-100 ut-allowed-content:hidden ut-upload-icon:text-neutral-800"
      endpoint={endpoint}
      onUploadBegin={() => setLoading(true)}
      onClientUploadComplete={(res) => {
        createImage(
          res[0].url,
          name,
          description,
          collections ?? [],
        );
        refresh && router.refresh();
        setLoading(false);
      }}
      config={{
        mode: "manual"
      }}
      onUploadError={(error: Error) => {
        console.log(`ERROR! ${error.message}`);
      }}
    />
  )
}
