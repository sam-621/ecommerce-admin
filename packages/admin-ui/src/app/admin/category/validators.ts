import { z } from 'zod';

import { type Category } from '@/lib/types';
import { type MakeAny } from '@/lib/utils';

export const validateCategory = (input: ValidateInput) => {
  const validation = validator.safeParse(input);

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

const validator = z.object({
  name: z.string().min(3),
  slug: z.string().min(3),
  image: z.string().optional(),
  enabled: z.boolean().default(true)
} satisfies MakeAny<ValidateInput>);

type ValidateInput = Pick<Category, 'name' | 'slug' | 'image' | 'enabled'>;
