import { ProductsList } from '@/components/lists';
import { CategoryRepository } from '@/lib/repositories';
import { type ServerPage } from '@/lib/utils';

export default async function CategoryPage({ params, searchParams }: ServerPage) {
  const products = await CategoryRepository.getProductsBySlug(params.slug);

  return (
    <div className="pt-24 md:pt-32 relative pb-48">
      <h1 className="font-bold mb-16 text-40 text-left">{params.slug}</h1>
      <div>
        <ProductsList products={products} />
      </div>
    </div>
  );
}
