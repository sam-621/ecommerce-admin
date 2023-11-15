import { type Prisma } from '@prisma/client';

import { prisma } from './index';

export const getProducts = async () => {
  const products = await prisma.product.findMany();

  return products;
};

export const saveProduct = async (input: Prisma.ProductCreateInput) => {
  return await prisma.product.create({
    data: input
  });
};
