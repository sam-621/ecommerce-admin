import Image from 'next/image';
import { type FC } from 'react';

import { type OrderLine } from '@/lib/types';
import { DEFAULT_PRODUCT_IMAGE, getFormattedPrice } from '@/lib/utils';

export const CheckoutProductCard: FC<Props> = ({ orderLine }) => {
  const product = orderLine.product;

  return (
    <article className="grid grid-cols-[100px,1fr] gap-12 lg:gap-16">
      <div className="border border-neutral-border rounded-lg w-[100px] h-[100px]">
        <Image
          // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
          src={product.image || DEFAULT_PRODUCT_IMAGE}
          width={100}
          height={100}
          alt={product.name}
          className="rounded-lg"
        />
      </div>
      <div className="content flex flex-col gap-8">
        <h3 className="h4 text-16 font-semibold">{product.name}</h3>
        <h2 className="h3 text-24 font-semibold">{getFormattedPrice(product.price)}</h2>
        <ul className="text-14 flex flex-col lg:flex-row lg:gap-12 lg:flex-wrap gap-8">
          <li className="text-neutral-light font-normal">
            <span className="font-medium text-neutral-text">Cantidad:</span> {orderLine.quantity}
          </li>
        </ul>
      </div>
    </article>
  );
};

type Props = {
  orderLine: OrderLine;
};
