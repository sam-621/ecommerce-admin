import { type Prisma } from '@prisma/client';

import { prisma } from './prisma';

const getByEmail = async (email: string) => {
  return await prisma.customer.findUnique({
    where: { email }
  });
};

const create = async (data: Prisma.CustomerCreateInput) => {
  return await prisma.customer.create({
    data
  });
};

export const CustomerRepository = {
  getByEmail,
  create
};
