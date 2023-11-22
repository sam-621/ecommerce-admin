import { CategoryRepository } from '@/lib/repository';
import { RouteResponse } from '@/lib/utils';

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const hasProducts = searchParams.get('products');

  const categories = await (hasProducts
    ? CategoryRepository.getProductsOnCategories()
    : CategoryRepository.getMany());

  return Response.json(new RouteResponse(categories, ['OK']));
};
