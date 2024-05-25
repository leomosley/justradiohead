import { ImageModel } from '@/types'
import Image from 'next/image';
import Link from 'next/link';

export default function ImageFrame({
  image,
  className
} : {
  image: ImageModel;
  className?: string;
}) {
  return (
    <div className="w-24 h-44 bg-white">
      {image.imageURL && (
        <Image
          src={image.imageURL}
          height={500}
          width={500}
          alt={image.name}
          className=""
        />
        // <Link
        //   href={`/dashboard/gallery/images/${image.id}`}
        //   className=""
        // >
        //   <span className="">Open</span>
        // </Link>
      )}
  </div>
  )
}
