import { type VendyxFetch } from '../utils';

export const vendyxFetch: VendyxFetch = async (url, options) => {
  const response = await fetch(`http://localhost:3001/api/${url}`, {
    method: 'GET',
    cache: 'no-cache',
    ...options
  });
  const data = await response.json();

  return data;
};
