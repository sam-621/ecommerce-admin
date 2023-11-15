import { z } from 'zod';

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
  username: z.string().min(3),
  password: z.string().min(6)
});

type ValidateAuthInput = {
  username: string;
  password: string;
};
