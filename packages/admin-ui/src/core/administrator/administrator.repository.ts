import { prisma } from '../shared/persistance';

export const findAdminByUsername = async (username: string) => {
  return await prisma.administrator.findUnique({ where: { username } });
};
