import React from 'react';
import prisma from '@/lib/prisma';
import Image from 'next/image';
import getRandomArrayItems from '@/utils/getRandomArrayItems';
import { Images } from '@prisma/client';
import clsx from 'clsx';

export default async function GalleryShowcase() {
  const showcaseCollection = await prisma.collection.findFirst({
    where: {
      title: "Showcase",
    },
    include: {
      images: true,
    }
  });

  const showcaseImages = showcaseCollection 
    ? getRandomArrayItems(showcaseCollection.images, 2) 
    : [];

  return (
    <div className="flex">
      <div className="flex gap-4 md:gap-8">
        {showcaseImages && showcaseImages.map((image: Images, index) => (
          <div className="relative flex-1">
            <Image 
              key={image.id}
              src={image.imageURL}
              className="aspect-square object-cover filter grayscale contrast-125"
              width={500}
              height={500}
              alt={image.description}
            />
            <div className="absolute inset-0 bg-red-700 opacity-100 mix-blend-multiply"></div>
          </div>
        ))}
      </div>
    </div>
  );
}