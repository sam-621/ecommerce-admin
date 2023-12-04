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

const removeLine = async (input: { lineId: string }) => {
  await vendyxFetch<Order>(`order/line/delete`, {
    body: JSON.stringify(input),
    method: 'POST'
  });
};

const addCustomer = async (input: {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  orderId: string;
}) => {
  return await vendyxFetch<Order>(`order/add-customer`, {
    body: JSON.stringify(input),
    method: 'POST'
  });
};

const complete = async (input: { orderId: string }) => {
  return await vendyxFetch<Order>(`order/complete`, {
    body: JSON.stringify(input),
    method: 'POST'
  });
};

export const OrderRepository = {
  getById,
  create,
  addLine,
  removeLine,
  addCustomer,
  complete
};
