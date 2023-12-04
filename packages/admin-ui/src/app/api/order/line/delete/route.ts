import { Decimal } from '@prisma/client/runtime/library';

import { OrdersRepository } from '@/lib/repository';
import { RouteResponse } from '@/lib/utils';

export const POST = async (req: Request) => {
  const body = (await req.json()) as unknown as {
    lineId: string;
  };

  const orderLine = await OrdersRepository.getLineById(body.lineId);

  if (!orderLine) {
    return Response.json(new RouteResponse(null, ['Order line not found']), {});
  }

  await OrdersRepository.deleteLine(orderLine.id);

  const order = orderLine.order;
  console.log({
    order,
    orderLine
  });

  await OrdersRepository.update(order.id, {
    subtotal: new Decimal(order.subtotal.toNumber() - orderLine.linePrice.toNumber()),
    total: new Decimal(order.total.toNumber() - orderLine.linePrice.toNumber()),
    totalQuantity: order.totalQuantity - orderLine.quantity
  });

  return Response.json(new RouteResponse(orderLine, ['OK']), {});
};
