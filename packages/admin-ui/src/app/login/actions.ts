'use server';

import { redirect } from 'next/navigation';

import { compare } from '@/lib/hash';
import { removeJWT, saveJWT } from '@/lib/jwt';
import { prisma } from '@/lib/repository';

import { validateAuthentication } from './validators';

export const authenticate = async (prevState: string | undefined, formData: FormData) => {
  const validation = validateAuthentication({
    username: formData.get('username')?.toString() ?? '',
    password: formData.get('password')?.toString() ?? ''
  });

  if (validation.errors) {
    return 'Error en los datos introducidos';
  }

  const { username, password } = validation.data;

  const admin = await prisma.administrator.findUnique({ where: { username } });

  if (!admin) {
    return 'El usuario o la contraseña son incorrectos';
  }

  const passwordsMatch = await compare(password, admin.password);

  if (!passwordsMatch) {
    return 'El usuario o la contraseña son incorrectos';
  }

  await saveJWT(username);
  redirect('/admin');
};

export const logout = () => {
  removeJWT();
  redirect('/login');
};
