import { z } from 'zod';

import { type Product } from '@/lib/types';
import { type MakeAny } from '@/lib/utils';

export const validateProduct = (input: ValidateInput) => {
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
  name: z.string().min(3),
  slug: z.string().min(3),
  sku: z.string().min(3),
  description: z.string().optional(),
  image: z.string().optional(),
  price: z.number().min(0),
  comparisonPrice: z.number().min(0).optional(),
  weight: z.number().optional(),
  stock: z.number().int().min(0),
  enabled: z.boolean().default(true)
} satisfies MakeAny<ValidateInput>);

type ValidateInput = Omit<Product, 'id' | 'createdAt' | 'updatedAt'>;
