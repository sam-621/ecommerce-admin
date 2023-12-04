import { type Product } from './product';

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  code: string;
  state: OrderStates;
  total: 0;
  subtotal: 0;
  totalQuantity: 0;
  customerId: null;
  lines: OrderLine[];
  customer: null;
};

export type OrderLine = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  unitPrice: number;
  quantity: number;
  linePrice: number;
  product: Product;
};

export enum OrderStates {
  MODIFYING = 'MODIFYING',
  PAYMENT_ADDED = 'PAYMENT_ADDED',
  PAYMENT_AUTHORIZED = 'PAYMENT_AUTHORIZED',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED'
}
