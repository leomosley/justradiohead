import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function usePreviousPathname()  {
  const pathname = usePathname();

  const currentRef = useRef<string>();
  const previousRef = useRef<string>();

  useEffect(() => {
    previousRef.current = currentRef.current;
    currentRef.current = pathname;
  }, [pathname]);

  return previousRef.current;
};
