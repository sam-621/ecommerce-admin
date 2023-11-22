import { ProductRepository } from '@/lib/repository';
import { RouteResponse } from '@/lib/utils';

export const GET = async (req: Request) => {
  const products = await ProductRepository.getMany();

  return Response.json(new RouteResponse(products, ['OK']));
};
