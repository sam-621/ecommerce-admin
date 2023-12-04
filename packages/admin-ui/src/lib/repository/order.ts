import { type Prisma } from '@prisma/client';

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

  return !order ? null : order;
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

const updateLine = async (id: string, input: Prisma.OrderLineUpdateInput) => {
  const orderLine = await prisma.orderLine.update({
    where: { id },
    data: input,
    include: {
      order: true,
      product: true
    }
  });

  return orderLine;
};

const deleteLine = async (id: string) => {
  const orderLine = await prisma.orderLine.delete({
    where: { id }
  });

  return orderLine;
};

const getLineById = async (id: string) => {
  const orderLine = await prisma.orderLine.findUnique({
    where: { id },
    include: {
      product: true,
      order: true
    }
  });

  return orderLine;
};

export const OrdersRepository = {
  getById,
  create,
  createLine,
  addCustomer,
  deleteLine,
  updateLine,
  getLineById,
  update
};
