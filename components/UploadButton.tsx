"use client";

import React from 'react'
import { UTUploadButton } from "@/utils/uploadthing";
import { Endpoints } from '@/app/api/uploadthing/core';
import createImage from '@/utils/images/createImage';

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
      className="ut-button:ut-uploading:after:bg-red-700/50 ut-button:bg-red-700 ut-allowed-content:hidden"
      endpoint={endpoint}
      config={{
        mode: "manual"
      }}
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
