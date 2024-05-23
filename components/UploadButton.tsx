"use client";

import React from 'react'
import { UTUploadButton } from "@/utils/uploadthing";
import { Endpoints } from '@/app/api/uploadthing/core';

export default function UploadButton({
  endpoint
} : {
  endpoint: Endpoints
}) {
  return (
    <UTUploadButton
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        console.log("Files: ", res);
      }}
      onUploadError={(error: Error) => {
        console.log(`ERROR! ${error.message}`);
      }}
    />
  )
}
