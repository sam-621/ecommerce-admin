import { type Prisma } from '@prisma/client';
import { unstable_noStore as noStore } from 'next/cache';

import { type Category, type Product } from '../types';
import { getCategoryMapped, getProductMapped } from './mappers';
import { prisma } from './prisma';

const getMany = async (): Promise<(Category & { items: number })[]> => {
  noStore();

  const categories = await prisma.category.findMany({
    include: {
      products: true
    }
  });

  return categories.map(c => ({
    ...getCategoryMapped(c),
    items: c.products.length
  }));
};

const getBySlug = async (slug: string): Promise<Category | null> => {
  noStore();

  const category = await prisma.category.findUnique({
    where: {
      slug
    }
  });

  return !category ? null : getCategoryMapped(category);
};

const getProductsOnCategory = async (id: string): Promise<Product[]> => {
  noStore();

  const category = await prisma.category.findUnique({
    where: {
      id
    },
    include: {
      products: {
        include: {
          product: true
        }
      }
    }
  });

  return category?.products.map(p => getProductMapped(p.product)) ?? [];
};

const getProductsOnCategories = async () => {
  noStore();

  const result = await prisma.productOnCategory.findMany({
    include: {
      category: {
        select: {
          id: true,
          name: true
        }
      },
      product: true
    }
  });

  return result.map(r => ({
    ...getProductMapped(r.product),
    category: {
      id: r.category.id,
      name: r.category.name
    }
  }));
};

const addProducts = async (categoryId: string, productsIds: string[]) => {
  await prisma.productOnCategory.createMany({
    data: productsIds.map(productId => ({
      categoryId,
      productId
    }))
  });
};

const removeProduct = async (categoryId: string, productId: string) => {
  await prisma.productOnCategory.delete({
    where: {
      productId_categoryId: {
        categoryId,
        productId
      }
    }
  });
};

const save = async (input: Prisma.CategoryCreateInput): Promise<Category> => {
  const categorySaved = await prisma.category.create({
    data: input
  });

  return getCategoryMapped(categorySaved);
};

const update = async (id: string, input: Prisma.CategoryUpdateInput): Promise<Category> => {
  const categoryUpdated = await prisma.category.update({
    where: { id },
    data: input
  });

  return getCategoryMapped(categoryUpdated);
};

const remove = async (id: string): Promise<void> => {
  await prisma.category.delete({ where: { id } });
};

export const CategoryRepository = {
  getMany,
  getBySlug,
  getProductsOnCategory,
  getProductsOnCategories,
  addProducts,
  removeProduct,
  save,
  update,
  remove
};
