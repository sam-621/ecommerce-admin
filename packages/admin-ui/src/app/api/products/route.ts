import { ProductRepository } from '@/lib/repository';
import { RouteResponse } from '@/lib/utils';

export const GET = async (req: Request) => {
  const products = await ProductRepository.getMany();
  const productToSend = products.filter(product => product.enabled);

  return Response.json(new RouteResponse(productToSend, ['OK']));
};
