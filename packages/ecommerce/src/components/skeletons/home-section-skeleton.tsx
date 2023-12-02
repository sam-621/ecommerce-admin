import { HomeSection } from '../sections';
import { ProductCardSkeleton } from './product-card-skeleton';

export const HomeSectionSkeleton = () => {
  return (
    <HomeSection
      title={<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>}
    >
      <div className="flex gap-[32px]">
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
      </div>
    </HomeSection>
  );
};
