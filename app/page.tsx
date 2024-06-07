import LinkList from "@/site/LinkList";
import ShowList from "@/site/ShowList";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HiHome } from "react-icons/hi";

export const metadata: Metadata = {
  title: "Home | Just Radiohead",
};

export default async function Home() {
  return (
    <main className="sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:min-h-dvh">
      <section id="about" className="flex flex-col p-4 max-h-half">
        <Link
          className="w-12 h-12 p-2 md:w-16 md:h-16 mt-2"
          href="/"
        >
          <Image 
            className=""
            src={"/icon.png"}
            height={500}
            width={500}
            alt="icon"
          />
        </Link>
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mt-4">
          <span className="text-red-600">JUST&nbsp;</span>
          <span className="text-neutral-100">RADIOHEAD</span>
        </h1>
        <span className="text-neutral-200 text-sm sm:text-base lg:text-lg mb-10 text-balance mt-2">
          The UK&apos;s Leading Radiohead &rsquo;Tribute&rsquo; Band.
          Respectfully performing songs from one of the 1990s and 2000s most loved bands.
        </span>
        <div className="mt-auto max-h-[50%]">
          <LinkList />
        </div>
      </section>
      <section id="shows" className="bg-white p-4 max-h-half">
        <h1 className="text-xl font-semibold pb-2 text-neutral-950 border-b border-b-neutral-950">Upcoming Shows</h1>
        <ShowList className="overflow-y-auto overflow-x-hidden max-h-half hide-scrollbar" />
      </section>
      <section id="gallery" className="bg-red-600 p-4">

      </section>
      <section id="shop" className="p-4">

      </section>
    </main>
  );
}
