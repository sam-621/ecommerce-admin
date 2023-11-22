import { vendyxFetch } from './vendyx-fetch';

const getMany = async () => {
  const { data } = await vendyxFetch('products');

  return data;
};

export const ProductRepository = {
  getMany
};
