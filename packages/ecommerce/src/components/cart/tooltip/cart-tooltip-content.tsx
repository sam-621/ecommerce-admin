import { useOrderContext } from '@/lib/contexts';

import { CartProduct } from '../cart-product';

export const CartTooltipContent = () => {
  const { order } = useOrderContext();

  return (
    <div className="p-24 flex-grow overflow-y-auto flex flex-col gap-40 cart_content_height">
      {order?.lines.length ? (
        order.lines.map(orderLine => <CartProduct key={orderLine.id} orderLine={orderLine} />)
      ) : (
        <div className="grid place-items-center h-full">
          <span className="text-neutral-light text-2xl">Carrito vacío</span>
        </div>
      )}
    </div>
  );
};
