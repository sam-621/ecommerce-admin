'use client';

import { useOrderContext } from '@/lib/contexts';
import { getFormattedPrice } from '@/lib/utils';

import { CheckoutProductCard } from './checkout-product-card';

export const CheckoutResume = () => {
  const { order } = useOrderContext();

  return (
    <aside className="flex flex-col gap-6 bg-neutral-white lg:p-64 lg:border-l border-neutral-border pb-32">
      <h2 className="text-neutral-title text-24 lg:text-32 font-bold hidden lg:block">
        Resumen de compra
      </h2>
      <div className="flex flex-col gap-6 p-16 border border-neutral-border rounded-2xl lg:border-none lg:p-0">
        <div className="flex flex-col gap-40 lg:border border-neutral-border rounded-2xl lg:p-6">
          {order?.lines.map(orderLine => (
            <CheckoutProductCard key={orderLine.id} orderLine={orderLine} />
          ))}
        </div>
        <div className="flex flex-col gap-6 font-medium">
          <div className="flex justify-between items-center">
            <span className="text-neutral-text text-16">Producto:</span>
            <span className="text-neutral-text">{getFormattedPrice(order?.total ?? 0)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-neutral-text text-16">Envío:</span>
            <span className="text-neutral-text">
              {/* {order?.shipping ? `$${formatPrice(order.shipping)}` : 'Por calcular'} */}
              Por calcular
            </span>
          </div>
          <hr className="border border-t-[1px] border-neutral-border" />
          <div className="flex justify-between items-center">
            <span className="text-neutral-text text-16">Total:</span>
            <span className="text-neutral-title text-32 font-bold">
              {getFormattedPrice(order?.total ?? 0)}
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};
