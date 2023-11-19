import { type Prisma } from '@prisma/client';
import { unstable_noStore as noStore } from 'next/cache';

import { type Product } from '../types';
import { getProductMapped } from './mappers';
import { prisma } from './prisma';

const getMany = async (): Promise<Product[]> => {
  noStore();
  const products = await prisma.product.findMany();

  return products.map(p => getProductMapped(p));
};

const getBySlug = async (slug: string): Promise<Product | null> => {
  const product = await prisma.product.findUnique({ where: { slug } });

  return !product ? null : getProductMapped(product);
};

const save = async (input: Prisma.ProductCreateInput): Promise<Product> => {
  const productSaved = await prisma.product.create({
    data: input
  });

  return getProductMapped(productSaved);
};

const update = async (id: string, input: Prisma.ProductUpdateInput): Promise<Product> => {
  const productSaved = await prisma.product.update({
    where: { id },
    data: input
  });

  return getProductMapped(productSaved);
};

const remove = async (id: string): Promise<void> => {
  await prisma.product.delete({ where: { id } });
};

export const ProductRepository = {
  getMany,
  getBySlug,
  save,
  update,
  remove
};
