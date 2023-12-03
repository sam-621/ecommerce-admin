import { type Product } from '../types';
import { vendyxFetch } from './vendyx-fetch';

const getMany = async () => {
  const { data } = await vendyxFetch<Product[]>('products');

  return data;
};

export const getBySlug = async (slug: string) => {
  const { data } = await vendyxFetch<Product>(`products/${slug}`);

  return data;
};

export const ProductRepository = {
  getMany,
  getBySlug
};
