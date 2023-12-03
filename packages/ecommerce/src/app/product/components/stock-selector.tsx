'use client';

import { type FC } from 'react';

import { Select, type SetStateSelect } from '@/components/theme';

const DEFAULT_AVAILABLE_VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => String(item));

export const StockSelect: FC<Props> = ({ quantity, stock, disabled, setQuantity }) => {
  const availableValues =
    stock > 10
      ? DEFAULT_AVAILABLE_VALUES
      : Array.from({ length: stock }).map((_, i) => String(i + 1));

  return (
    <Select
      disabled={disabled}
      buttonPrefix="Cantidad: "
      state={quantity}
      setState={setQuantity}
      values={availableValues}
    />
  );
};

type Props = {
  quantity: string;
  setQuantity: SetStateSelect;
  stock: number;
  disabled?: boolean;
};
