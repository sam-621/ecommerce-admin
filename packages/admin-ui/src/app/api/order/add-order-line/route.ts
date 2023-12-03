import { ProductRepository } from '@/lib/repository';
import { OrdersRepository } from '@/lib/repository/order';
import { RouteResponse } from '@/lib/utils';

export const POST = async (req: Request) => {
  const body = req.body as unknown as { productId: string; quantity: number; orderId: string };
  const product = await ProductRepository.getByID(body.productId);

  if (!product) {
    return Response.json(new RouteResponse(null, ['Product not found']));
  }

  const unitPrice = product.price;

  const products = await OrdersRepository.createLine({
    linePrice: unitPrice * body.quantity,
    quantity: body.quantity,
    unitPrice,
    order: {
      connect: {
        id: body.orderId
      }
    },
    product: {
      connect: {
        id: body.productId
      }
    }
  });

  return Response.json(new RouteResponse(products, ['OK']));
};
