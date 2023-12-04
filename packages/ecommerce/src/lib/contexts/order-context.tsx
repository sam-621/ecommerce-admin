'use client';

import {
  createContext,
  type FC,
  type PropsWithChildren,
  useContext,
  useEffect,
  useState
} from 'react';

import { OrderRepository } from '../repositories';
import { type Order } from '../types';
import { LS_ORDER_ID } from '../utils';

type ContextSchema = {
  order: Order | null;
  removeLine: (lineId: string) => Promise<void>;
  addLine: (productId: string, quantity: number) => Promise<void>;
};

const initialOrder: ContextSchema = {
  order: null,
  addLine: async () => {},
  removeLine: async () => {}
};

export const OrderContext = createContext(initialOrder);

export const OrderProvider: FC<Props> = ({ children }) => {
  const [order, setOrder] = useState<Order | null>(null);

  const refetchOrder = async () => {
    const orderId = localStorage.getItem(LS_ORDER_ID);

    if (!orderId) {
      return;
    }

    const order = await OrderRepository.getById(orderId);

    if (!order) {
      localStorage.setItem(LS_ORDER_ID, '');
      return;
    }

    setOrder(order);
  };

  // fetch order in every first render
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    refetchOrder();
  }, []);

  const addLine = async (productId: string, quantity: number) => {
    let orderId = localStorage.getItem(LS_ORDER_ID);

    if (!orderId) {
      orderId = await createOrder();
    }

    await OrderRepository.addLine({ orderId, productId, quantity });
    await refetchOrder();
  };

  const removeLine = async (lineId: string) => {
    await OrderRepository.removeLine({ lineId });
    await refetchOrder();
  };

  const createOrder = async () => {
    const { data } = await OrderRepository.create();
    localStorage.setItem(LS_ORDER_ID, data.id);

    return data.id;
  };

  return (
    <OrderContext.Provider value={{ order, addLine, removeLine }}>{children}</OrderContext.Provider>
  );
};

type Props = PropsWithChildren;

export const useOrderContext = () => useContext(OrderContext);
