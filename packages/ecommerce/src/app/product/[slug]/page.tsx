import { ProductRepository } from '@/lib/repositories';
import { type ServerPage } from '@/lib/utils';

import { ProductDetails, StickyProductCart } from '../components';

export default async function ProductDetailsPage({ params, searchParams }: ServerPage) {
  const { slug } = params;
  const product = await ProductRepository.getBySlug(slug);

  return (
    <main className="mb-64 lg:grid grid-cols-[1fr,350PX] pt-24 gap-32">
      <ProductDetails product={product} />
      <StickyProductCart product={product} />
    </main>
  );
}
