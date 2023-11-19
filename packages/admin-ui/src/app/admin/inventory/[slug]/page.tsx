import Link from 'next/link';
import { notFound } from 'next/navigation';

import { ProductRepository } from '@/lib/repository';
import { type ServerPage } from '@/lib/utils';

import { UpdateProductForm } from '../components';

export default async function ProductDetailsPage({ params, searchParams }: ServerPage) {
  const slug = params.slug;
  const isCreated = !!searchParams.isCreated;

  const product = await ProductRepository.getBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <UpdateProductForm
      product={product}
      headerMessage={
        isCreated
          ? {
              title: 'Producto ' + product.name + ' creado',
              content: (
                <div>
                  <div>
                    Puedes{' '}
                    <Link href={'/admin/inventory/create'} className="underline">
                      agregar otro producto{' '}
                    </Link>
                    o{' '}
                    <Link href={'/admin/inventory'} className="underline">
                      ver todos tus productos
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
