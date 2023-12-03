import { CategoryRepository } from '@/lib/repository';
import { RouteResponse } from '@/lib/utils';

export const GET = async (req: Request, { params }: { params: { slug: string } }) => {
  const categories = await CategoryRepository.getProductsOnCategoryBySlug(params.slug);

  return Response.json(new RouteResponse(categories, ['OK']));
};
