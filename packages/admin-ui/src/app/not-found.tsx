import { FrownIcon } from 'lucide-react';

import { ButtonLink } from '@/components/theme';

/**
 * Not found page for the app
 */
export default function NotFound() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-2">
      <FrownIcon className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>No se pudo encontrar la página que buscas</p>
      <ButtonLink href="/admin">Ir a admin</ButtonLink>
    </main>
  );
}
