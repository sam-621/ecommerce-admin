'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { CategoryRepository } from '@/lib/repository';
import { type Category } from '@/lib/types';
import { uploadImage } from '@/lib/upload';
import { getJsonFromFormData, type ServerActionResult, type StringifyObject } from '@/lib/utils';

import { validateCategory } from './validators';

export const createCategory = async (prevState: ServerActionResult, formData: FormData) => {
  const input = getJsonFromFormData<StringifyObject<Category>>(formData);
  const image = input.image as unknown as File;

  const imageUrl = image.size ? await uploadImage(image) : '';

  const validation = validateCategory({
    ...input,
    enabled: input.enabled === 'enabled',
    slug: input.name.replaceAll(' ', '-').toLowerCase(),
    image: imageUrl ?? ''
  });

  if (validation.errors) {
    return {
      error: true,
      message: 'Error en los datos introducidos'
    };
  }

  await CategoryRepository.save(validation.data);

  revalidatePath('/admin/category');
  redirect(`/admin/category/${validation.data.slug}?isCreated=true`);
};
