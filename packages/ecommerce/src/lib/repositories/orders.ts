import { type Order } from '../types';
import { vendyxFetch } from './vendyx-fetch';

const getById = async (id: string) => {
  const { data } = await vendyxFetch<Order>(`order/${id}`);

  return data;
};

const create = async () => {
  return await vendyxFetch<Order>(`order`, { method: 'POST' });
};

const addLine = async (input: { productId: string; quantity: number; orderId: string }) => {
  await vendyxFetch<Order>(`order/line`, { body: JSON.stringify(input), method: 'POST' });
};

export const OrderRepository = {
  getById,
  create,
  addLine
};
