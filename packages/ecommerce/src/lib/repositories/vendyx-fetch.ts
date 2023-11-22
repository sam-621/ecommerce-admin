import { type VendyxFetch } from '../utils';

export const vendyxFetch: VendyxFetch = async (url, options = { method: 'GET' }) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
