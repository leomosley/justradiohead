import ShowList from "@/site/ShowList";
import getLinks from "@/utils/getLinks";
import { Metadata } from "next";
import Link from "next/link";
import { HiHome } from "react-icons/hi";

export const metadata: Metadata = {
  title: "Home | Just Radiohead",
};

export default async function Home() {
  const links = await getLinks();

  return (
    <main className="sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:min-h-dvh">
      <section id="about" className="flex flex-col p-4">
        <Link
          className="w-10 h-10 md:w-12 md:h-12 text-neutral-100"
          href="/"
        >
          <HiHome className="w-full h-full" />
        </Link>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
          <span className="text-red-600">JUST&nbsp;</span>
          <span className="text-neutral-100">RADIOHEAD</span>
        </h1>
        <span className="text-neutral-200 mb-10">Description more desc more words and words with more words.</span>
        <div className="flex flex-col flex-wrap mt-auto">
          {links.map((link, index) => (
            <a
              className="group cursor-pointer p-1 w-fit"
              key={link.url}
              href={link.url}
              target="_blank"
            >
              <span className="text-neutral-100 font-semibold text-lg tracking-tight transition duration-100 group-hover:text-neutral-500">{link.text}</span>
            </a>
          ))}
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
