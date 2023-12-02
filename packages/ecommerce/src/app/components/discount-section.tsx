'use client';

import { ProductCard } from '@/components/cards';
import { HomeSection } from '@/components/sections';
import { ProductRepository } from '@/lib/repositories';

export const DiscountSection = async () => {
  const products = await ProductRepository.getMany();
  const productsWithDiscount = products.filter(product => product.comparisonPrice);

  if (!productsWithDiscount.length) return null;

  return (
    <HomeSection
      title={
        <>
          Nuestras <span className="text-primary-500">Ofertas</span>
        </>
      }
    >
      <div className={`flex gap-[32px] ${productsWithDiscount.length > 4 && 'overflow-x-scroll'}`}>
        {productsWithDiscount.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </HomeSection>
  );
};
