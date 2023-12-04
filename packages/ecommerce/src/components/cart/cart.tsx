'use client';

import { ShoppingCartIcon } from 'lucide-react';
import { useState } from 'react';

import { useOrderContext } from '@/lib/contexts';

import { CartTooltip } from './cart-tootlip';

export const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { order } = useOrderContext();

  return (
    <>
      <button
        type="button"
        className="relative w-40 h-40 hover:bg-neutral-alt text-neutral-light hover:text-neutral-text transition-all flex-none rounded-full place-items-center grid"
        onClick={() => setIsOpen(true)}
      >
        <ShoppingCartIcon className="h-24 cursor-pointer" />
        {Boolean(order?.totalQuantity) && (
          <span className="absolute font-semibold top-[0] right-[-4px] bg-[#D93A5D] h-20 w-20  grid place-items-center rounded-full text-neutral-white text-xs">
            {order?.totalQuantity}
          </span>
        )}
      </button>
      <CartTooltip isOpen={isOpen} close={() => setIsOpen(false)} />
    </>
  );
};
