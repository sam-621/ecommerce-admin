'use server';

import { redirect } from 'next/navigation';

import { compare } from '@/lib/hash';
import { removeJWT, saveJWT } from '@/lib/jwt';
import { AdminRepository } from '@/lib/repository';
import { type ServerActionResult } from '@/lib/utils';

import { validateAuthentication } from './validators';

export const authenticate = async (prevState: ServerActionResult, formData: FormData) => {
  const validation = validateAuthentication({
    username: formData.get('username')?.toString() ?? '',
    password: formData.get('password')?.toString() ?? ''
  });

  if (validation.errors) {
    return {
      fieldErrors: validation.errors,
      error: true,
      message: 'Error en los datos introducidos'
    };
  }

  const { username, password } = validation.data;

  const admin = await AdminRepository.getByUsername(username);

  if (!admin) {
    return {
      error: true,
      message: 'El usuario o la contraseña son incorrectos'
    };
  }

  const passwordsMatch = await compare(password, admin.password);

  if (!passwordsMatch) {
    return {
      error: true,
      message: 'El usuario o la contraseña son incorrectos'
    };
  }

  await saveJWT(username);
  redirect('/admin');
};

export const logout = () => {
  removeJWT();
  redirect('/login');
};
