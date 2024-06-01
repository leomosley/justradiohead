import Image from 'next/image';
import Link from 'next/link';
import { Images } from '@prisma/client';
import { HiExternalLink, HiOutlinePhotograph } from 'react-icons/hi';

export default function ImageItem({
  image,
  className
} : {
  image: Images;
  className?: string;
}) {
  return (
    <div className="flex relative w-32 h-56 bg-neutral-900">
      {image.imageURL ? (
        <>
        <Image
          src={image.imageURL}
          height={500}
          width={500}
          alt={image.name}
          className="object-cover"
        />
        <Link
          href={`/dashboard/gallery/images/${image.id}`}
          className="flex absolute justify-center items-center group p-2 inset-0 hover:bg-black/40 hover:backdrop-blur-sm transition duration-150"
          >
          <div className="flex gap-0.5 items-center max-w-fit opacity-0 group-hover:opacity-100 bg-white p-2 sm:px-4 rounded-full transition duration-150">
            <span className="hidden sm:block font-bold text-neutral-950">Open</span>
            <HiExternalLink className="w-5 h-5 text-neutral-950" />
          </div>
        </Link>
        </>          
      ) : (
        <div className="m-auto">
          <HiOutlinePhotograph className="w-16 h-16 p-2 text-neutral-800 font-thin" />
        </div>
      )}
    </div>
  );
}
