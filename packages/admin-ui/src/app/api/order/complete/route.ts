import { OrdersRepository } from '@/lib/repository';
import { prisma } from '@/lib/repository/prisma';
import { OrderStates } from '@/lib/types';
import { RouteResponse } from '@/lib/utils';

export const POST = async (req: Request) => {
  const body = (await req.json()) as unknown as { orderId: string };

  const order = await OrdersRepository.getById(body.orderId);

  if (!order?.customer) {
    return Response.json(new RouteResponse(order, ['No customer added']));
  }

  await OrdersRepository.update(order.id, {
    state: OrderStates.PAYMENT_AUTHORIZED,
    collocatedAt: new Date()
  });

  const products = order.lines.map(line => ({ id: line.productId, quantity: line.quantity }));

  // eslint-disable-next-line @typescript-eslint/promise-function-async
  const prismaPromises = products.map(p => {
    // eslint-disable-next-line @typescript-eslint/return-await
    return prisma.product.update({
      where: { id: p.id },
      data: {
        stock: {
          decrement: p.quantity
        }
      }
    });
  });

  await prisma.$transaction(prismaPromises);

  return Response.json(new RouteResponse(order, ['OK']));
};
