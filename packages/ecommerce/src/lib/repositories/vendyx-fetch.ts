import { type VendyxFetch } from '../utils';

export const vendyxFetch: VendyxFetch = async (url, options) => {
  const response = await fetch(`https://localhost:300/api/${url}`, {
    method: 'GET',
    cache: 'no-cache',
    ...options
  });
  const data = await response.json();

  return data;
};
