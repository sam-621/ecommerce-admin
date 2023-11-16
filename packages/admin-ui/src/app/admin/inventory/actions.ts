'use server';

import { saveProduct } from '@/lib/repository';
import { type Product } from '@/lib/types';
import { uploadImage } from '@/lib/upload';
import { getJsonFromFormData, type ServerActionResult, type StringifyObject } from '@/lib/utils';

import { validateProduct } from './validators';

export const createProduct = async (prevState: ServerActionResult, formData: FormData) => {
  const input = getJsonFromFormData<StringifyObject<Product>>(formData);
  const image = input.image as unknown as File;

  const imageUrl = image.size ? await uploadImage(image) : '';

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
