"use client";

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

const capitalise = (s: string) => {
  return s
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
}

export default function DashboardTitle() {
  const router = useRouter();
  const pathname = usePathname();
  const paths = pathname.split('/').slice(2);

  return (
    <div className="flex gap-2 h-12 mb-2">
      {paths.map((path, index) => (
        <div key={path} className="flex gap-2 items-center">
          <Link
            className="flex cursor-pointer items-end"
            href={`/dashboard/${paths.slice(0, index+1).join("/")}`}
          >
            {!/\d/.test(path) ? (
              <h1 className={clsx(
                "text-neutral-200 text-4xl font-bold tracking-tight mb-2",
                "hover:underline underline-offset-8 decoration-neutral-200 transition decoration-2"
              )}>
                {capitalise(path)}
              </h1>
            ) : (
              <span className={clsx(
                "text-neutral-300 text-2xl font-semibold tracking-tight",
                "hover:underline underline-offset-8 decoration-neutral-300 transition decoration-2"
              )}>
                {path}
              </span>
            )}
          </Link>
          {index !== (paths.length-1)  && (
            <h1 className="text-red-700 text-5xl mb-2 font-extralight">/</h1>
          )}
        </div>
      ))}
    </div>
  );
}
