import { CategoryRepository } from '@/lib/repository';
import { RouteResponse } from '@/lib/utils';

export const GET = async (req: Request) => {
  const categories = await CategoryRepository.getMany();

  return Response.json(new RouteResponse(categories, ['OK']));
};
