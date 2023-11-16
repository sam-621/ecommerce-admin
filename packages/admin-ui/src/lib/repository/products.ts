import { type Prisma } from '@prisma/client';

import { type Product } from '../types';
import { getProductMapped } from './mappers';
import { prisma } from './prisma';

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

export const getProductBySlug = async (slug: string): Promise<Product | null> => {
  const product = await prisma.product.findUnique({ where: { slug } });

  return !product ? null : getProductMapped(product);
};
