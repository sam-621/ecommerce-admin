'use server';

import { type Product } from '@prisma/client';

import { saveProduct } from '@/lib/repository/products';
import { uploadImage } from '@/lib/upload';
import { getJsonFromFormData } from '@/lib/utils';
import { type StringifyObject } from '@/lib/utils/types';

import { validateProduct } from './validators';

export const createProduct = async (
  prevState: { error: boolean; message: string },
  formData: FormData
) => {
  const input = getJsonFromFormData<StringifyObject<Product>>(formData);

  const imageUrl = await uploadImage(formData.get('image') as File);

  const validation = validateProduct({
    ...input,
    price: Number(input.price ?? 0),
    comparisonPrice: Number(input.comparisonPrice ?? 0),
    weight: Number(input.weight ?? 0),
    stock: Number(input.stock ?? 0),
    enabled: input.enabled === 'enabled',
    image: imageUrl ?? ''
  });

  if (validation.errors) {
    return {
      error: true,
      message: 'Error en los datos introducidos'
    };
  }

  await saveProduct(validation.data);

  return {
    error: false,
    message: `Producto ${validation.data.name} creado`
  };
};
