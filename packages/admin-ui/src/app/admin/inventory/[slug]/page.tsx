import { notFound } from 'next/navigation';

import { getProductBySlug } from '@/lib/repository';

import { updateProduct } from '../actions';
import { ProductForm } from '../components';

export default async function ProductDetailsPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const updateProductAction = updateProduct.bind(null, product);

  return <ProductForm title={product.name} action={updateProductAction} product={product} />;
}
