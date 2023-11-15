import { prisma } from './index';

export const getProducts = async () => {
  const products = await prisma.product.findMany();

  return products;
};
