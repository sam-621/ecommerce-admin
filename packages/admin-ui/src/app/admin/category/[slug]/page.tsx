import { notFound } from 'next/navigation';

import { CategoryRepository } from '@/lib/repository';
import { type ServerPage } from '@/lib/utils';

export default async function CategoryDetailsPage({ params, searchParams }: ServerPage) {
  const slug = params.slug;
  const isCreated = !!searchParams.isCreated;

  const category = await CategoryRepository.getBySlug(slug);

  if (!category) {
    notFound();
  }

  console.log({
    category
  });

  return <h1>hoa</h1>;
}
