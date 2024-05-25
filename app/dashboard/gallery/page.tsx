import AddImageFrame from "@/components/AddImageFrame";
import ImageFrame from "@/components/ImageFrame";
import getImages from "@/utils/getImages";
import Link from "next/link";

export default async function Page() {
  const images = await getImages(7);
  const imageArray = [...Array(8)].map((_, i) => images[i] ?? {});

  return (
    <div className="flex flex-col">
      <h1 className="text-neutral-200 text-4xl font-bold tracking-tight mb-2">Gallery</h1>
      <div className="flex flex-wrap gap-4 max-w-[500px]">
        {imageArray.map((image, index) => (
          index === images.length 
          ? <AddImageFrame key={index} />
          : <ImageFrame key={index} image={image} />
        ))}  
      </div>
    </div>
  );
}
