'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { removeProduct, saveProduct, updateProductSaved } from '@/lib/repository';
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
    slug: input.name.replaceAll(' ', '-').toLowerCase(),
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

  revalidatePath('/admin/inventory');
  redirect(`/admin/inventory/${validation.data.slug}?isCreated=true`);
};

export const updateProduct = async (
  product: Product,
  prevState: ServerActionResult,
  formData: FormData
) => {
  const input = getJsonFromFormData<StringifyObject<Product>>(formData);
  const image = input.image as unknown as File | undefined;

  const isFile = image?.size !== undefined;
  const imageUrl = isFile ? (image?.size ? await uploadImage(image) : '') : product.image;

  const validation = validateProduct({
    ...input,
    slug: product.slug,
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

  const productUpdated = await updateProductSaved(product.id, validation.data);

  revalidatePath(`/admin/inventory`);
  redirect(`/admin/inventory/${productUpdated.slug}`);

  return {
    error: false,
    message: `Producto ${productUpdated.name} actualizado`
  };
};

export const deleteProduct = async (id: string) => {
  await removeProduct(id);

  revalidatePath('/admin/inventory');
};
