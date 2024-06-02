"use client";

import React from 'react'
import { UTUploadDropzone } from "@/utils/uploadthing";
import { Endpoints } from '@/app/api/uploadthing/core';
import createImage from '@/utils/images/createImage';

export default function UploadDropzone({
  endpoint,
  name,
  description=name,
  collectionId
} : {
  endpoint: Endpoints;
  name: string;
  description?: string;
  collectionId?: string;
}) {
  return (
    <UTUploadDropzone
      className="cursor-pointer ut-button:bg-red-700 ut-button:ut-uploading:after:bg-red-700/50 p-4 bg-neutral-900 ut-label:text-neutral-100 ut-allowed-content:hidden ut-upload-icon:text-neutral-800"
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        createImage(
          res[0].url,
          name,
          description,
        );
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
