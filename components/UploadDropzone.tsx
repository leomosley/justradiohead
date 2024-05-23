"use client";

import React from 'react'
import { UTUploadDropzone } from "@/utils/uploadthing";
import { Endpoints } from '@/app/api/uploadthing/core';

export default function UploadDropzone({
  endpoint
} : {
  endpoint: Endpoints
}) {
  return (
    <UTUploadDropzone
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
