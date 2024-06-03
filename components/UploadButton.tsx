"use client";

import React from 'react'
import { UTUploadButton } from "@/utils/uploadthing";
import { Endpoints } from '@/app/api/uploadthing/core';
import createImage from '@/utils/images/createImage';

export default function UploadButton({
  endpoint,
  name,
  description="_",
  collections,
  setLoading
} : {
  endpoint: Endpoints;
  name: string;
  description?: string;
  collections?: { id: string}[];
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <UTUploadButton
      className="ut-button:ut-uploading:after:bg-red-700/50 ut-button:bg-red-700 ut-allowed-content:hidden"
      endpoint={endpoint}
      config={{
        mode: "manual"
      }}
      onUploadBegin={() => setLoading(true)}
      onClientUploadComplete={(res) => {
        createImage(
          res[0].url,
          name,
          description,
          collections ?? [],
        );
        setLoading(false);
      }}
      onUploadError={(error: Error) => {
        console.log(`ERROR! ${error.message}`);
      }}
    />
  )
}
