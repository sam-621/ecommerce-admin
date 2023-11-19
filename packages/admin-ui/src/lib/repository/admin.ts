import { type Administrator } from '../types';
import { prisma } from './prisma';

const getByUsername = async (username: string): Promise<Administrator | null> => {
  return await prisma.administrator.findUnique({ where: { username } });
};

export const AdminRepository = {
  getByUsername
};
