import { clsx } from 'clsx';
import { Toaster } from 'sonner';

export default function ToasterClient() {
  return (
    <Toaster
      toastOptions={{
        classNames: {
          toast: clsx(
            'font-mono font-normal',
            '!border-gray-200 dark:!border-gray-800',
          ),
        },
      }}
    />
  );
}