import { Decimal } from '@prisma/client/runtime/library';
import { z } from 'zod';

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
  price: z
    .number()
    .min(0)
    .transform(arg => new Decimal(arg)),
  comparisonPrice: z
    .number()
    .min(0)
    .transform(arg => new Decimal(arg))
    .optional(),
  weight: z
    .number()
    .transform(arg => new Decimal(arg))
    .optional(),
  stock: z.number().int().min(0),
  enabled: z.boolean().default(true)
});

type ValidateInput = {
  name: string;
  slug: string;
  sku: string;
  description?: string;
  image?: string;
  price: number;
  comparisonPrice?: number;
  weight?: number;
  stock: number;
  enabled: boolean;
};
