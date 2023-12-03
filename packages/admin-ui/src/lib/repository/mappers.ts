import {
  type Category as PrismaCategory,
  type Order as PrismaOrder,
  type OrderLine as PrismaOrderLine,
  type OrderStates as PrismaOrderStates,
  type Product as PrismaProduct
} from '@prisma/client';

import { type Category, type Order, type OrderLine, OrderStates, type Product } from '../types';

export const getProductMapped = (product: PrismaProduct): Product => {
  return {
    ...product,
    description: product.description ?? undefined,
    image: product.image ?? undefined,
    comparisonPrice: product.comparisonPrice?.toNumber(),
    price: product.price.toNumber(),
    weight: product.weight?.toNumber()
  };
};

export const getCategoryMapped = (category: PrismaCategory): Category => {
  return {
    ...category,
    description: category.description ?? undefined,
    image: category.image ?? undefined
  };
};

export const getOrderMapped = (order: PrismaOrder): Order => {
  return {
    ...order,
    state: getOrderStateMapped(order.state),
    total: order.total.toNumber(),
    subtotal: order.subtotal.toNumber(),
    collocatedAt: order.collocatedAt ?? undefined
  };
};

export const getOrderLineMapped = (orderLine: PrismaOrderLine): OrderLine => {
  return {
    ...orderLine,
    unitPrice: orderLine.unitPrice.toNumber(),
    linePrice: orderLine.linePrice.toNumber()
  };
};

const getOrderStateMapped = (orderState: PrismaOrderStates) => {
  if (orderState === 'MODIFYING') {
    return OrderStates.MODIFYING;
  }

  if (orderState === 'PAYMENT_ADDED') {
    return OrderStates.PAYMENT_ADDED;
  }

  if (orderState === 'PAYMENT_AUTHORIZED') {
    return OrderStates.PAYMENT_AUTHORIZED;
  }

  if (orderState === 'SHIPPED') {
    return OrderStates.SHIPPED;
  }

  if (orderState === 'DELIVERED') {
    return OrderStates.DELIVERED;
  }

  return OrderStates.MODIFYING;
};
