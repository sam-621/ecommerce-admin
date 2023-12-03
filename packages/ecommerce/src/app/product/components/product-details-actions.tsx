'use client';

import { ShoppingCartIcon } from 'lucide-react';
import { type FC } from 'react';

import { FilledButton } from '@/components/theme';
import { type Product } from '@/lib/types';

import { StockSelect } from './stock-selector';

export const ProductDetailsActions: FC<Props> = ({ product }) => {
  const buttonText = product.stock ? 'Agregar al carrito' : 'Agotado';

  return (
    <>
      <div className="flex flex-col gap-3">
        <h5 className="text-neutral-text text-base">Personaliza tu producto</h5>
        <div className="flex flex-wrap gap-x-16 gap-y-3">
          <StockSelect
            quantity={String('1')}
            setQuantity={() => {}}
            stock={Number(product.stock)}
          />
        </div>
      </div>
      <div className="mt-5">
        <FilledButton disabled={!product.stock}>
          <span className=" transition-all duration-500">{buttonText}</span>
          <ShoppingCartIcon className="h-24 w-24 icon-cart ease-in-out duration-500 delay-50" />
        </FilledButton>
      </div>
    </>
  );
};

type Props = {
  product: Product;
};
