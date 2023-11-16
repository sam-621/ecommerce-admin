import { type Administrator } from '../types';
import { prisma } from './prisma';

export const getAdminByUsername = async (username: string): Promise<Administrator | null> => {
  return await prisma.administrator.findUnique({ where: { username } });
};
