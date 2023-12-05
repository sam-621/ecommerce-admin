import { type VendyxFetch } from '../utils';

export const vendyxFetch: VendyxFetch = async (url, options) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL ?? process.env.API_URL}${url}`, {
    method: 'GET',
    cache: 'no-cache',
    ...options
  });
  const data = await response.json();

  return data;
};
