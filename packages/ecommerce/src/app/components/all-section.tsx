import { ProductCard } from '@/components/cards';
import { HomeSection } from '@/components/sections';
import { ProductRepository } from '@/lib/repositories';

export const AllSection = async () => {
  const products = await ProductRepository.getMany();

  if (!products.length) return null;

  return (
    <HomeSection
      title={
        <>
          Todos nuestros <span className="text-primary-500">Productos</span>
        </>
      }
    >
      <div className={`flex gap-[32px] ${products.length > 4 && 'overflow-x-scroll'}`}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </HomeSection>
  );
};
