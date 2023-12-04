import { OrdersRepository } from '@/lib/repository/order';
import { RouteResponse } from '@/lib/utils';

export const POST = async (req: Request) => {
  const order = await OrdersRepository.create({
    code: '1234567890123456',
    total: 0,
    subtotal: 0,
    totalQuantity: 0
  });

  return Response.json(new RouteResponse(order, ['OK']));
};
