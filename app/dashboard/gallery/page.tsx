import AddImageItem from "@/components/AddImageItem";
import ImageItem from "@/components/ImageItem";
import getCollections from "@/utils/collections/getCollections";
import getImages from "@/utils/images/getImages";
import clsx from "clsx";
import Link from "next/link";
import { HiArrowCircleRight, HiPlusCircle } from "react-icons/hi";

export default async function Page() {
  const images = await getImages(7);
  const collections = await getCollections(7);
  const imageArray = [...Array(8)].map((_, i) => images?.at(i));
  
  return (
    <div className="flex flex-col max-w-[560px]">
      <div className="flex gap-2 items-baseline mb-2">
        <h2 className="text-neutral-200 text-3xl font-bold tracking-tight">Images</h2>
        <span className="text-red-700 text-3xl font-light">/</span>
        <Link
          className=""
          href="/dashboard/gallery/images"
        >
          <span className="text-neutral-200 font-semibold hover:underline underline-offset-2 decoration-neutral-300 transition">See all →</span>

        </Link>
      </div>
      <div className="flex flex-wrap gap-4 mb-8">
        {imageArray.map((image, index) => (
          index === images?.length 
          ? <AddImageItem key={index} />
          : <ImageItem key={index} image={image} />
        ))}  
      </div>
      <h2 className="text-neutral-200 text-3xl font-bold tracking-tight mb-2">Collections</h2>
      <div className="flex flex-col gap-2">
        {collections && collections.map((collection, index) => (
          <Link
            key={collection.id}
            className={clsx(
              "flex items-center border gap-2 text-neutral-200 text-lg font-semibold p-2",
              "rounded hover:bg-red-700 hover:border-red-700 transition duration-100"
            )}
            href={`/dashboard/gallery/collections/${collection.id}`}
          >
            <span className="">{collection.title}</span>
            <HiArrowCircleRight className="ml-auto w-5 h-5"/>
          </Link>
        ))}
        <div className="flex gap-2">
          {collections && collections.length > 0 && (
            <Link
              className={clsx(
                "flex flex-1 items-center border gap-2 text-neutral-200 text-lg font-semibold p-2",
                "rounded hover:bg-red-700 hover:border-red-700 transition duration-150"
              )}
              href={`/dashboard/gallery/collections`}
            >
              <span className="">See all</span>
              <HiArrowCircleRight className="ml-auto w-5 h-5"/>
            </Link>
          )}
          <Link
            className={clsx(
              "flex flex-1 items-center border gap-2 text-neutral-200 text-lg font-semibold p-2",
              "rounded hover:bg-red-700 hover:border-red-700 transition duration-150"
            )}
            href={`/dashboard/gallery/collections/add`}
          >
            <span className="">Add collection</span>
            <HiPlusCircle className="ml-auto w-5 h-5"/>
          </Link>
        </div>
      </div>
    </div>
  );
}
