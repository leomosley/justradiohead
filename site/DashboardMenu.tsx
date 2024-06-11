"use client";

import clsx from "clsx";
import Link from "next/link";
import { HiCog, HiHome, HiLogout, HiOutlineGlobeAlt, HiOutlinePhotograph, HiOutlineTicket } from "react-icons/hi";
import { usePathname } from "next/navigation";

export default function DashboardMenu() {
  const navigation = [
    { text: "Overview", href: "/overview", icon: <HiHome className="w-full h-full" /> },
    { text: "Shows", href: "/shows", icon: <HiOutlineTicket className="w-full h-full" /> },
    { text: "Gallery", href: "/gallery", icon: <HiOutlinePhotograph className="w-full h-full" /> },
    { text: "Links", href: "/links", icon: <HiOutlineGlobeAlt className="w-full h-full" /> },
    { text: "Settings", href: "/settings", icon: <HiCog className="w-full h-full" /> },
    { text: "Logout", href: "/logout", icon: <HiLogout className="w-full h-full" /> },
  ];
  const pathname = usePathname();

  return (
    <nav className={clsx(
      "flex justify-between w-full p-4 bg-neutral-950 top-16 z-40 sticky",
      "sm:w-auto sm:flex-col sm:p-6 sm:gap-2 sm:min-w-48 sm:justify-normal sm:top-24 sm:h-dvh"
    )}>
      {navigation.map((nav, index) => (
        <Link
          key={nav.href}
          href={'/dashboard' + nav.href}
          className={clsx(
            "flex gap-2 p-2 rounded items-center transition duration-100",
            pathname.startsWith(`/dashboard${nav.href}`)
              ? "bg-red-700"
              : "bg-neutral-950 hover:bg-red-900"
            
          )}
          aria-label={nav.href}
        >
          <div className="text-neutral-200 w-5 h-5">
            {nav.icon}
          </div>
          <span className="text-neutral-200 text-md hidden sm:block">{nav.text}</span>
        </Link>
      ))}
    </nav>
  );
}
