'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { compare } from '../shared/libs/hashing';
import { COOKIE_TOKEN_FIELD, createJWT } from '../shared/libs/jwt';
import { prisma } from '../shared/persistance';
import { validateAuthentication } from './validators';

export const authenticate = async (prevState: undefined, formData: FormData) => {
  const validation = validateAuthentication({
    username: formData.get('username')?.toString() ?? '',
    password: formData.get('password')?.toString() ?? ''
  });

  if (validation.errors) {
    return {
      errors: validation.errors,
      message: 'Campos faltantes. No se pudo autenticar el administrador'
    };
  }

  const { username, password } = validation.data;

  const admin = await prisma.administrator.findUnique({ where: { username } });

  if (!admin) {
    return {
      message: 'El usuario o la contraseña son incorrectos'
    };
  }

  const passwordsMatch = await compare(password, admin.password);

  if (!passwordsMatch) {
    return {
      message: 'El usuario o la contraseña son incorrectos'
    };
  }

  const token = createJWT({ username });

  cookies().set(COOKIE_TOKEN_FIELD, token);
  redirect('/admin');
};
