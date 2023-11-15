import { prisma } from './index';

export const getAdminByUsername = async (username: string) => {
  return await prisma.administrator.findUnique({ where: { username } });
};
