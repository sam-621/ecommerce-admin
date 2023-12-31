import { type FC } from 'react';

import { type Product } from '@/lib/types';

import { ProductCard } from '../cards';

export const ProductsList: FC<Props> = ({ products }) => {
  return (
    <section className="grid grid-cols-[repeat(auto-fill, minmax(200px, 1fr))] md:grid-cols-3 h-fit gap-32">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

type Props = {
  products: Product[];
};
