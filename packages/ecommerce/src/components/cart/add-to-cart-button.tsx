'use client';

import { ShoppingCartIcon } from 'lucide-react';
import { type FC, type PropsWithChildren } from 'react';

import { useOrderContext } from '@/lib/contexts';

import { FilledButton } from '../theme';

export const AddToCartButton: FC<Props> = ({ productId, quantity, stock }) => {
  const { addLine } = useOrderContext();

  const buttonText = stock > 0 ? 'Agregar al carrito' : 'Agotado';

  return (
    <FilledButton
      disabled={!stock}
      onClick={e => {
        e.preventDefault();
        addLine(productId, quantity);
      }}
    >
      <span className=" transition-all duration-500">{buttonText}</span>
      <ShoppingCartIcon className="h-24 w-24 icon-cart ease-in-out duration-500 delay-50" />
    </FilledButton>
  );
};

type Props = PropsWithChildren & {
  productId: string;
  stock: number;
  quantity: number;
};
