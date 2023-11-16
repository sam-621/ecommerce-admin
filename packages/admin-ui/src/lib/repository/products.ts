import { type Prisma } from '@prisma/client';

import { type Product } from '../types';
import { prisma } from './index';
import { getProductMapped } from './mappers';

export const getProducts = async (): Promise<Product[]> => {
  const products = await prisma.product.findMany();

  return products.map(p => getProductMapped(p));
};

export const saveProduct = async (input: Prisma.ProductCreateInput): Promise<Product> => {
  const productSaved = await prisma.product.create({
    data: input
  });

  return getProductMapped(productSaved);
};
