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
    />
  )
}
