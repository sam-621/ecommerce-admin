import Image from 'next/image';
import { type FC } from 'react';

import { type OrderLine } from '@/lib/types';
import { DEFAULT_PRODUCT_IMAGE, getFormattedPrice } from '@/lib/utils';

export const CartProduct: FC<Props> = ({ orderLine }) => {
  const product = orderLine.product;

  return (
    <article className="flex gap-24">
      <div className="border border-neutral-border rounded-lg w-[100px] h-[100px]">
        <Image
          src={product.image ?? DEFAULT_PRODUCT_IMAGE}
          width={100}
          height={100}
          alt={product.name}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col flex-grow">
        <h3 className="font-bold text-lg text-neutral-title mb-4">{product.name}</h3>
        <span className="font-bold mb-4 text-3xl text-neutral-title">
          {getFormattedPrice(product.price)}
        </span>
        <div className="flex justify-between">
          <span>Cantidad: {orderLine.quantity}</span>
          {/* <StockSelect
            disabled={isUpdating}
            quantity={orderQuantity}
            setQuantity={async (e: string) => {
              if (e === String(orderLine.quantity)) return;

              setOrderQuantity(e);
              await adjustOrder({ ...orderLine, quantity: Number(e) });
            }}
            stock={Number(currentStock)}
          /> */}
          {/* <TextButton
            disabled={isCartProductLoading}
            onClick={() => removeFromOrder(orderLine)}
            className="text-error-700 text-xs font-semibold"
          >
            {isRemoving ? 'Eliminando...' : 'Eliminar'}
          </TextButton> */}
        </div>
      </div>
    </article>
  );
};

type Props = {
  orderLine: OrderLine;
};
