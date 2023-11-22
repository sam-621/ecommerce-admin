import { FrownIcon } from 'lucide-react';

import { ButtonLink } from '@/components/theme';

/**
 * Not found page for category
 */
export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <FrownIcon className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>No se pudo encontrar la categoría que buscas</p>
      <ButtonLink href="/admin/category">Atras</ButtonLink>
    </main>
  );
}
