'use client';

import { Loader2Icon, ShoppingCartIcon } from 'lucide-react';
import { type FC, type PropsWithChildren, useState } from 'react';

import { useOrderContext } from '@/lib/contexts';

import { FilledButton } from '../theme';

export const AddToCartButton: FC<Props> = ({ productId, quantity, stock }) => {
  const { addLine } = useOrderContext();
  const [isLoading, setIsLoading] = useState(false);

  const buttonText = stock > 0 ? 'Agregar al carrito' : 'Agotado';

  return (
    <FilledButton
      disabled={!stock || isLoading}
      onClick={async e => {
        e.preventDefault();
        setIsLoading(true);
        await addLine(productId, quantity);
        setIsLoading(false);
      }}
    >
      {isLoading && <Loader2Icon size={16} className="mr-2 animate-spin" />}
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
