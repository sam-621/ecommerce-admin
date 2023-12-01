import Link from 'next/link';
import { notFound } from 'next/navigation';

import { CategoryRepository, ProductRepository } from '@/lib/repository';
import { type ServerPage } from '@/lib/utils';

import { UpdateCategoryForm } from '../components';

export default async function CategoryDetailsPage({ params, searchParams }: ServerPage) {
  const slug = params.slug;
  const isCreated = !!searchParams.isCreated;

  const category = await CategoryRepository.getBySlug(slug);

  if (!category) {
    notFound();
  }

  const productWithCategory = await ProductRepository.getWithCategory();

  return (
    <UpdateCategoryForm
      category={category}
      products={productWithCategory}
      headerMessage={
        isCreated
          ? {
              title: 'Categoría ' + category.name + ' creada',
              content: (
                <div>
                  <div>
                    Puedes{' '}
                    <Link href={'/admin/category/create'} className="underline">
                      agregar otra categoría{' '}
                    </Link>
                    o{' '}
                    <Link href={'/admin/category'} className="underline">
                      ver todas tus categoría
                    </Link>
                  </div>
                </div>
              )
            }
          : undefined
      }
    />
  );
}
