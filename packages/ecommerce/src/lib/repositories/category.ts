import { type Category, type Product } from '../types';
import { vendyxFetch } from './vendyx-fetch';

const getMany = async () => {
  const { data } = await vendyxFetch<Category[]>('category');

  return data;
};

const getProductWithCategories = async () => {
  const { data } = await vendyxFetch('categories?products=true');

  return data;
};

const getProductsBySlug = async (slug: string) => {
  const { data } = await vendyxFetch<Product[]>(`category/${slug}`);

  return data;
};

export const CategoryRepository = {
  getMany,
  getProductsBySlug,
  getProductWithCategories
};
