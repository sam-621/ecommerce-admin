'use client';

import { type FC } from 'react';

import { type Product } from '@/lib/types';

import { ProductCard } from '../cards';
import { Carousel } from '../theme/carousel';

export const ProductsCarousel: FC<Props> = ({ products }) => {
  return (
    <Carousel className="flex gap-[32px]">
      {products.map(product => (
        <Carousel.Slide className="mr-[32px]" key={product.id + Math.random()}>
          <ProductCard product={product} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

type Props = {
  products: Product[];
};
