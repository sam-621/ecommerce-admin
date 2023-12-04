import { type Order, type OrderLine, type Product } from '@prisma/client';

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

  let orderLine: OrderLine & {
    order: Order;
    product: Product;
  };

  // if the product is already in the order
  // just update the quantity and price of that order line
  if (orderLineAlreadyCreated) {
    orderLine = await OrdersRepository.updateLine(orderLineAlreadyCreated.id, {
      quantity: orderLineAlreadyCreated.quantity + body.quantity,
      linePrice: orderLineAlreadyCreated.linePrice.toNumber() + product.price * body.quantity
    });
  } else {
    // if the product is not in the order
    // create a new order line
    const unitPrice = product.price;

    orderLine = await OrdersRepository.createLine({
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
  }

  // update order subtotal, total and totalQuantity
  await OrdersRepository.update(body.orderId, {
    subtotal: orderLine.order.subtotal.toNumber() + orderLine.linePrice.toNumber(),
    total: orderLine.order.total.toNumber() + orderLine.linePrice.toNumber(),
    totalQuantity: orderLine.order.totalQuantity + body.quantity
  });

  return Response.json(new RouteResponse(orderLine, ['OK']));
};

export const DELETE = async (req: Request) => {
  const body = (await req.json()) as unknown as {
    lineId: string;
  };

  const orderLine = await OrdersRepository.getLineById(body.lineId);

  if (!orderLine) {
    return Response.json(new RouteResponse(null, ['Order line not found']));
  }

  await OrdersRepository.deleteLine(orderLine.id);

  const order = orderLine.order;

  await OrdersRepository.update(order.id, {
    subtotal: order.subtotal.toNumber() - orderLine.linePrice.toNumber(),
    total: order.total.toNumber() - orderLine.linePrice.toNumber(),
    totalQuantity: order.totalQuantity - orderLine.quantity
  });

  return Response.json(new RouteResponse(orderLine, ['OK']));
};
