'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { compare } from '../shared/libs/hashing';
import { COOKIE_TOKEN_FIELD, signJWT, verifyJWT } from '../shared/libs/jwt';
import { prisma } from '../shared/persistance';
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

  const token = await signJWT({ username });

  cookies().set(COOKIE_TOKEN_FIELD, token);
  redirect('/admin');
};

export const getIsValidSession = async () => {
  const token = cookies().get(COOKIE_TOKEN_FIELD)?.value;

  if (!token) return false;

  const payload = await verifyJWT(token);

  if (!payload) return false;

  const admin = await prisma.administrator.findUnique({ where: { username: payload.username } });

  if (!admin) return false;

  return true;
};
