'use client';
import { ReactNode, useEffect, useState } from 'react';
import { AppStateContext } from '.';
import { usePathname } from 'next/navigation';
import usePreviousPathname from '@/utils/usePreviousPathname';

export default function AppStateProvider({
  children,
}: {
  children: ReactNode
}) {
  const previousPathname = usePreviousPathname();
  const pathname = usePathname();
  const [onDashboard, setOnDasboard] = useState<boolean>(false);

  useEffect(() => {
    setOnDasboard(pathname.startsWith('/dashboard'));
  }, [pathname]);

  return (
    <AppStateContext.Provider
      value={{
        previousPathname,
        onDashboard
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};