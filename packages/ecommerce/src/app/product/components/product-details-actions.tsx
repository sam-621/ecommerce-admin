'use client';

import { type FC, useState } from 'react';

import { AddToCartButton } from '@/components/cart';
import { type Product } from '@/lib/types';

import { StockSelect } from './stock-selector';

export const ProductDetailsActions: FC<Props> = ({ product }) => {
  const [quantity, setQuantity] = useState<string>('1');

  return (
    <>
      <div className="flex flex-col gap-3">
        <h5 className="text-neutral-text text-base">Personaliza tu producto</h5>
        <div className="flex flex-wrap gap-x-16 gap-y-3">
          <StockSelect
            quantity={String(quantity)}
            setQuantity={setQuantity}
            stock={Number(product.stock)}
          />
        </div>
      </div>
      <div className="mt-5">
        <AddToCartButton productId={product.id} quantity={1} stock={product.stock} />
      </div>
    </>
  );
};

type Props = {
  product: Product;
};
