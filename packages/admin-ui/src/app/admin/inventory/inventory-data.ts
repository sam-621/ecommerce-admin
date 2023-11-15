import { prisma } from '@/core/shared/persistance';

export const getProducts = async () => {
  const products = await prisma.product.findMany();

  return products;
};
