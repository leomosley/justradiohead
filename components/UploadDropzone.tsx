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
      className="cursor-pointer"
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        createImage(
          res[0].url,
          name,
          description,
        );
      }}
      onUploadError={(error: Error) => {
        console.log(`ERROR! ${error.message}`);
      }}
      appearance={{
        button: {
          background: "#b91c1c"
        },
        container: {
          background: "#171717",
          padding: "1rem"
        },
        label: {
          color: "#e5e5e5"
        },
        uploadIcon: {
          color: "#262626"
        },
        allowedContent: {
          display: "none"
        },
      }}
    />
  )
}
