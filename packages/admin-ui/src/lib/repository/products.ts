import { type Prisma } from '@prisma/client';

import { prisma } from './index';

export const getProducts = async () => {
  const products = await prisma.product.findMany();

  return products.map(p => ({
    ...p,
    comparisonPrice: p.comparisonPrice?.toNumber(),
    price: p.price.toNumber(),
    weight: p.weight?.toNumber()
  }));
};

export const saveProduct = async (input: Prisma.ProductCreateInput) => {
  return await prisma.product.create({
    data: input
  });
};
