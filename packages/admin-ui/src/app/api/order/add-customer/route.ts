import { type Prisma } from '@prisma/client';

import { OrdersRepository } from '@/lib/repository/order';
import { RouteResponse } from '@/lib/utils';

export const POST = async (req: Request) => {
  const body = req.body as unknown as Prisma.CustomerCreateInput & { orderId: string };
  const order = await OrdersRepository.addCustomer(body.orderId, body);

  return Response.json(new RouteResponse(order, ['OK']));
};
