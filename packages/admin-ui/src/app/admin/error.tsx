'use client';

import { useEffect } from 'react';

import { Button } from '@/components/theme';

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col gap-4 items-center justify-center">
      <h2 className="text-center">Un error inesperado ha ocurrido</h2>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }
      >
        Volver a intentar
      </Button>
    </main>
  );
}
