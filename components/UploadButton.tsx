"use client";

import React from 'react'
import { UTUploadButton } from "@/utils/uploadthing";
import { Endpoints } from '@/app/api/uploadthing/core';
import storeImage from '@/utils/storeImage';

export default function UploadButton({
  endpoint,
  name,
  description="_",
  collectionId
} : {
  endpoint: Endpoints;
  name: string;
  description?: string;
  collectionId?: string;
}) {
  return (
    <UTUploadButton
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        storeImage(
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
