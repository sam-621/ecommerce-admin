import { type Administrator } from '../types';
import { prisma } from './index';

export const getAdminByUsername = async (username: string): Promise<Administrator | null> => {
  return await prisma.administrator.findUnique({ where: { username } });
};
