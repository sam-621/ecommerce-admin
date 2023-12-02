import { type Category } from '../types';
import { vendyxFetch } from './vendyx-fetch';

const getMany = async () => {
  const { data } = await vendyxFetch<Category[]>('category');
  console.log({
    data
  });

  return data;
};

const getProductOnCategories = async () => {
  const { data } = await vendyxFetch('categories?products=true');

  return data;
};

export const CategoryRepository = {
  getMany,
  getProductOnCategories
};
