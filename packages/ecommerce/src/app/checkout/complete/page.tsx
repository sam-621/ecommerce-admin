import { notFound } from 'next/navigation';

import { OrderRepository } from '@/lib/repositories';
import { getFormattedPrice } from '@/lib/utils';

import { CheckoutProductCard } from '../components/checkout-product-card';

export default async function SuccessPage({
  searchParams
}: {
  searchParams?: {
    orderId: string;
  };
}) {
  const orderId = searchParams?.orderId;
  const order = await OrderRepository.getById(orderId ?? '');

  if (!order) {
    notFound();
  }

  const orderPlatedAt = new Date(order.collocatedAt);
  const [day, month] = [orderPlatedAt.getDate(), orderPlatedAt.getMonth()];

  return (
    <main className="flex flex-col gap-32 pt-32 lg:pt-48 mb-128">
      <div className="w-full">
        <h1 className="text-center text-neutral-title text-40 font-bold">
          ¡Tu pedido se ha realizado con éxito!
        </h1>
      </div>
      <div className="flex justify-center gap-32">
        <div className="h-fit flex flex-col gap-6 bg-neutral-white p-6 border border-neutral-border rounded-2xl">
          {order.lines.map(orderLine => (
            <CheckoutProductCard key={orderLine.id} orderLine={orderLine} />
          ))}
        </div>
        <div className="flex flex-col gap-16 h-fit bg-neutral-white p-6 border border-neutral-border rounded-2xl">
          <h2>Detalles de compra</h2>
          <div className="flex items-center w-full gap-8 mb-4">
            <p className="text-neutral-light text-xs">
              {day} de {MONTHS[month]}
            </p>
            <hr className="opacity-50 bg-neutral-border w-[1px] h-[22px] border-none rounded-full" />
            <p className="text-neutral-light text-xs">No. orden: #{order?.code}</p>
          </div>
          <hr className="border border-t-[1px] border-neutral-border" />
          <div className="flex flex-col gap-6">
            {/* <div className="flex justify-between items-center">
              <span className="text-neutral-text text-16">Producto:</span>
              <span className="text-neutral-light">${formatPrice(order?.total ?? 0)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-neutral-text text-16">Envío:</span>
              <span className="text-neutral-light">{'Por calcular'}</span>
            </div>
            <hr className="border border-t-[1px] border-neutral-border" /> */}
            <div className="flex justify-between items-center">
              <span className="text-neutral-text text-16">Total:</span>
              <span className="text-neutral-title text-32 font-bold">
                {getFormattedPrice(order?.total ?? 0)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const MONTHS = {
  0: 'Enero',
  1: 'Febrero',
  2: 'Marzo',
  3: 'Abril',
  4: 'Mayo',
  5: 'Junio',
  6: 'Julio',
  7: 'Agosto',
  8: 'Septiembre',
  9: 'Octubre',
  10: 'Noviembre',
  11: 'Diciembre'
};
