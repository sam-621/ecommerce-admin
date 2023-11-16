import { notFound } from 'next/navigation';

import { getProductBySlug } from '@/lib/repository';

export default async function ProductDetailsPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main>
      <h1>{product.name}</h1>
    </main>
  );
}
