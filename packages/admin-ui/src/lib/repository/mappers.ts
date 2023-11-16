import { type Product as PrismaProduct } from '@prisma/client';

import { type Product } from '../types';

export const getProductMapped = (product: PrismaProduct): Product => {
  return {
    ...product,
    description: product.description ?? undefined,
    image: product.image ?? undefined,
    comparisonPrice: product.comparisonPrice?.toNumber(),
    price: product.price.toNumber(),
    weight: product.weight?.toNumber()
  };
};
