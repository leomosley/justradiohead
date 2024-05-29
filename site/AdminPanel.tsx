"use client";

import Link from 'next/link';
import { HiEye, HiEyeOff, HiAdjustments, HiHome} from 'react-icons/hi';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';

export default function AdminPanel() {
  const { data: session, status} = useSession();
  const pathname = usePathname();
  
  // add view switcher? 
  return status === "authenticated" && (
    <div className="fixed bottom-4 right-4 p-2 rounded bg-white shadow-md">
      {pathname.startsWith('/dashboard') ? (
        <Link 
          className=""
          href="/"
        >
          <HiHome className="w-5 h-5" />
        </Link>
      ) : (
        <Link 
          className=""
          href="/dashboard/overview"
        >
          <HiAdjustments className="w-5 h-5" />
        </Link>
      )}
    </div>
  );
}
