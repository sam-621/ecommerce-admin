import { type Prisma } from '@prisma/client';

import { type Category } from '../types';
import { getCategoryMapped } from './mappers';
import { prisma } from './prisma';

const getMany = async (): Promise<Category[]> => {
  const categories = await prisma.category.findMany();

  return categories.map(c => getCategoryMapped(c));
};

const getBySlug = async (slug: string): Promise<Category | null> => {
  const category = await prisma.category.findUnique({
    where: {
      slug
    }
  });

  return !category ? null : getCategoryMapped(category);
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
  save,
  update,
  remove
};
