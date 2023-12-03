export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  code: string;
  state: OrderStates;
  total: number;
  subtotal: number;
  collocatedAt: Date;
  totalQuantity: number;
};

export type OrderLine = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  unitPrice: number;
  quantity: number;
  linePrice: number;
};

export enum OrderStates {
  MODIFYING = 'MODIFYING',
  PAYMENT_ADDED = 'PAYMENT_ADDED',
  PAYMENT_AUTHORIZED = 'PAYMENT_AUTHORIZED',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED'
}
