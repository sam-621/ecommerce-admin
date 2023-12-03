import { type Prisma } from '@prisma/client';

import { type Order } from '../types';
import { getOrderMapped } from './mappers';
import { prisma } from './prisma';

const getById = async (id: string): Promise<Order | null> => {
  const order = await prisma.order.findUnique({
    where: { id }
  });

  return !order ? null : getOrderMapped(order);
};

const create = async (input: Prisma.OrderCreateInput): Promise<Order> => {
  const orderSaved = await prisma.order.create({
    data: input
  });

  return getOrderMapped(orderSaved);
};

const update = async (id: string, input: Prisma.OrderUpdateInput): Promise<Order> => {
  const orderUpdated = await prisma.order.update({
    where: { id },
    data: input
  });

  return getOrderMapped(orderUpdated);
};

export const OrdersRepository = {
  getById,
  create,
  update
};
