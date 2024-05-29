"use client";

import { HiEye, HiEyeOff, HiAdjustments, HiHome} from 'react-icons/hi';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useAppState } from '@/state';

export default function AdminPanel() {
  const { data: session, status} = useSession();
  const { previousPathname, onDashboard } = useAppState();
  const router = useRouter();
  
  const navigate = () => {
    if(!onDashboard) {
      if (previousPathname?.startsWith('/dashboard')) {
        router.back();
      } {
        router.push('/dashboard/overview');
      }
    } else {
      router.push('/');
    } 
  }

  // add view switcher? 
  return status === "authenticated" && (
    <div className="fixed flex items-center bottom-4 right-4 p-2 rounded bg-white shadow-md">
      <button
        className="w-5 h-5"
        onClick={navigate}
      >
        {onDashboard
          ? <HiHome className="w-full h-full" />
          : <HiAdjustments className="w-full h-full" />
        }
      </button>
    </div>
  );
}
