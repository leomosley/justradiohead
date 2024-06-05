"use client";

import deleteImage from '@/utils/images/deleteImage';
import React from 'react';

export default function DeleteImageButton({
  id,
  disabled=false
} : {
  id: string;
  disabled?: boolean;
}) {

  const handleDelete = async () => {
    await deleteImage(id);
  }

  return (
    <button
      className="p-2 rounded bg-red-700 text-white font-bold"
      onClick={handleDelete}
    >
      Delete Image
    </button>
  );
}
