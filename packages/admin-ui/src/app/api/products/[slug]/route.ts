import { ProductRepository } from '@/lib/repository';
import { RouteResponse } from '@/lib/utils';

export const GET = async (req: Request, { params }: { params: { slug: string } }) => {
  const product = await ProductRepository.getBySlug(params.slug);

  return Response.json(new RouteResponse(product, ['OK']));
};
