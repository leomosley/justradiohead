import { Metadata } from "next";
import Link from "next/link";
import { HiHome } from "react-icons/hi";

export const metadata: Metadata = {
  title: "Home | Just Radiohead",
};

export default function Home() {
  const socialLinks = [
    { text: "Facebook", href: "https://www.facebook.com/justradiohead" },
    { text: "TikTok", href: "https://www.tiktok.com/@justradioheadband" },
    { text: "Youtube", href: "https://www.youtube.com/@justradiohead" },
    { text: "Twitter / X", href: "https://twitter.com/radioheadjust" },
    { text: "Instagram", href: "https://www.instagram.com/just_radiohead/" },
  ];

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
        <div className="flex flex-col mt-auto">
          {socialLinks.map((link, index) => (
            <a
              className="group cursor-pointer p-1 w-fit"
              key={link.href}
              href={link.href}
              target="_blank"
            >
              <span className="text-neutral-100 font-semibold text-lg tracking-tight transition duration-100 group-hover:text-neutral-500">{link.text}</span>
            </a>
          ))}
        </div>
      </section>
      <section id="shows" className="bg-white p-4">

      </section>
      <section id="gallery" className="bg-red-600 p-4">

      </section>
      <section id="shop" className="p-4">

      </section>
    </main>
  );
}
