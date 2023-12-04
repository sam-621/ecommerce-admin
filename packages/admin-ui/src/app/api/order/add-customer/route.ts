import { type Prisma } from '@prisma/client';

import { OrdersRepository } from '@/lib/repository/order';
import { RouteResponse } from '@/lib/utils';

export const POST = async (req: Request) => {
  const body = (await req.json()) as unknown as Prisma.CustomerCreateInput & { orderId: string };
  console.log({
    body
  });

  const order = await OrdersRepository.addCustomer(body.orderId, {
    email: body.email,
    firstName: body.firstName,
    lastName: body.lastName,
    phoneNumber: body.phoneNumber
  });

  return Response.json(new RouteResponse(order, ['OK']));
};
