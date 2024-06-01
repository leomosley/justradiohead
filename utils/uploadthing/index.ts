import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";
 
import type { OurFileRouter } from "@/app/api/uploadthing/core";
 
export const UTUploadButton = generateUploadButton<OurFileRouter>();
export const UTUploadDropzone = generateUploadDropzone<OurFileRouter>();