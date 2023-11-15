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

  await saveJWT(username);
  redirect('/admin');
};

export const saveJWT = async (username: string) => {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + Number(process.env.EXPIRATION_TIME);

  const token = await signJWT({ username }, { iat, exp });

  const date = new Date();

  cookies().set(COOKIE_TOKEN_FIELD, token, {
    httpOnly: true,
    expires: date.setMilliseconds(date.getMilliseconds() + exp)
  });
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
