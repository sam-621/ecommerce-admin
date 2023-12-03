import { OrdersRepository } from '@/lib/repository/order';
import { RouteResponse } from '@/lib/utils';

export const GET = async (req: Request, { params }: { params: { id: string } }) => {
  const order = await OrdersRepository.getById(params.id);

  return Response.json(new RouteResponse(order, ['OK']));
};
