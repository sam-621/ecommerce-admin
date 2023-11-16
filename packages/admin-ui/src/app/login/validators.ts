import { z } from 'zod';

import { type Administrator } from '@/lib/types';

export const validateAuthentication = (input: ValidateAuthInput) => {
  const validation = Validator.safeParse(input);

  if (!validation.success) {
    return {
      data: undefined,
      errors: validation.error.flatten().fieldErrors
    };
  }

  return {
    errors: undefined,
    data: validation.data
  };
};

const Validator = z.object({
  username: z.string().min(3, 'Nombre de usuario debe ser mayor a 3 caracteres'),
  password: z.string().min(6, 'Contraseña debe ser mayor a 6 caracteres')
});

type ValidateAuthInput = Pick<Administrator, 'username' | 'password'>;
