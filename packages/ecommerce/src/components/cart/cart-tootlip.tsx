import { type FC } from 'react';

import {
  CartTooltipContent,
  CartTooltipFooter,
  CartTooltipHeader,
  CartTooltipWrapper
} from './tooltip';

export const CartTooltip: FC<Props> = ({ isOpen, close }) => {
  return (
    <CartTooltipWrapper isOpen={isOpen} close={close}>
      <CartTooltipHeader close={close} />
      <CartTooltipContent />
      <CartTooltipFooter />
    </CartTooltipWrapper>
  );
};

type Props = {
  close: () => void;
  isOpen: boolean;
};
