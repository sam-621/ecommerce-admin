import { type Prisma } from '@prisma/client';

import { type Order, type OrderLine } from '../types';
import { getOrderLineMapped, getOrderMapped } from './mappers';
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

const createLine = async (input: Prisma.OrderLineCreateInput): Promise<OrderLine> => {
  const orderLineMapped = await prisma.orderLine.create({
    data: input
  });

  return getOrderLineMapped(orderLineMapped);
};

const addCustomer = async (id: string, input: Prisma.CustomerCreateInput): Promise<Order> => {
  const orderUpdated = await prisma.order.update({
    where: { id },
    data: {
      customer: {
        connectOrCreate: {
          create: input,
          where: { email: input.email }
        }
      }
    }
  });

  return getOrderMapped(orderUpdated);
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
  createLine,
  addCustomer,
  update
};
