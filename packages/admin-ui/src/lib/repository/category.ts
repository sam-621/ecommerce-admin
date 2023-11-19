import { type Category } from '../types';
import { getCategoryMapped } from './mappers';
import { prisma } from './prisma';

export const fetchCategory = async (): Promise<Category[]> => {
  const categories = await prisma.category.findMany();

  return categories.map(c => getCategoryMapped(c));
};
