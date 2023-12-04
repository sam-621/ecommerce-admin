import { type Prisma } from '@prisma/client';

import { getOrderMapped } from './mappers';
import { prisma } from './prisma';

const getById = async (id: string) => {
  const order = await prisma.order.findUnique({
    where: { id },
    include: {
      lines: {
        include: {
          product: true
        }
      },
      customer: true
    }
  });

  return !order ? null : getOrderMapped(order);
};

const create = async (input: Prisma.OrderCreateInput) => {
  const orderSaved = await prisma.order.create({
    data: input,
    include: {
      lines: {
        include: {
          product: true
        }
      },
      customer: true
    }
  });

  return orderSaved;
};

const createLine = async (input: Prisma.OrderLineCreateInput) => {
  const orderLine = await prisma.orderLine.create({
    data: input,
    include: {
      order: true,
      product: true
    }
  });

  return orderLine;
};

const addCustomer = async (id: string, input: Prisma.CustomerCreateInput) => {
  const orderUpdated = await prisma.order.update({
    where: { id },
    data: {
      customer: {
        connectOrCreate: {
          create: input,
          where: { email: input.email }
        }
      }
    },
    include: {
      lines: {
        include: {
          product: true
        }
      },
      customer: true
    }
  });

  return orderUpdated;
};

const update = async (id: string, input: Prisma.OrderUpdateInput) => {
  const orderUpdated = await prisma.order.update({
    where: { id },
    data: input,
    include: {
      lines: {
        include: {
          product: true
        }
      },
      customer: true
    }
  });

  return orderUpdated;
};

export const OrdersRepository = {
  getById,
  create,
  createLine,
  addCustomer,
  update
};
