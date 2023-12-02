import { ProductCard } from '@/components/cards';
import { HomeSection } from '@/components/sections';
import { ProductRepository } from '@/lib/repositories';

export const OnSaleSection = async () => {
  const products = await ProductRepository.getMany();
  const onSaleProducts = products.filter(product => product.comparisonPrice);

  return (
    <HomeSection
      title={
        <>
          En <span className="text-primary-500">Liquidación</span>
        </>
      }
    >
      <div className="grid grid-cols-1 gap-32 lg:grid-cols-2">
        {onSaleProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </HomeSection>
  );
};
