import Image from 'next/image';
import Link from 'next/link';
import { Images } from '@prisma/client';

export default function ImageFrame({
  image,
  className
} : {
  image: Images;
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
  );
}
