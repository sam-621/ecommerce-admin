import { type Order, type OrderLine, type Product } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';

import { ProductRepository } from '@/lib/repository';
import { OrdersRepository } from '@/lib/repository/order';
import { RouteResponse } from '@/lib/utils';

export const POST = async (req: Request) => {
  const body = (await req.json()) as unknown as {
    productId: string;
    quantity: number;
    orderId: string;
  };

  // get product that is going to be added to the order
  const product = await ProductRepository.getByID(body.productId);

  if (!product) {
    return Response.json(new RouteResponse(null, ['Product not found']));
  }

  // get order that is going to be updated
  const order = await OrdersRepository.getById(body.orderId);

  if (!order) {
    return Response.json(new RouteResponse(null, ['Order not found']));
  }

  // check if the product is already in the order
  const orderLineAlreadyCreated = order.lines.find(line => line.product.id === body.productId);

  let newOrderLine: OrderLine & {
    order: Order;
    product: Product;
  };
  const marginToAdd = product.price * body.quantity;

  // if the product is already in the order
  // just update the quantity and price of that order line
  if (orderLineAlreadyCreated) {
    newOrderLine = await OrdersRepository.updateLine(orderLineAlreadyCreated.id, {
      quantity: orderLineAlreadyCreated.quantity + body.quantity,
      linePrice: orderLineAlreadyCreated.linePrice.toNumber() + marginToAdd
    });
  } else {
    // if the product is not in the order
    // create a new order line
    const unitPrice = product.price;

    newOrderLine = await OrdersRepository.createLine({
      linePrice: marginToAdd,
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
  }

  console.log({
    orderLine: newOrderLine
  });

  // update order subtotal, total and totalQuantity
  const newOrder = await OrdersRepository.update(body.orderId, {
    subtotal: new Decimal(order.subtotal.toNumber() + marginToAdd),
    total: new Decimal(order.total.toNumber() + marginToAdd),
    totalQuantity: newOrderLine.order.totalQuantity + body.quantity
  });

  return Response.json(new RouteResponse(newOrder, ['OK']));
};
