import { Dialog } from '@headlessui/react';
import { XIcon } from 'lucide-react';
import { type FC } from 'react';

export const CartTooltipHeader: FC<Props> = ({ close }) => {
  return (
    <header className="flex justify-between h-80 border-b border-neutral-border items-center px-6">
      <Dialog.Title as="h3" className="text-32 font-bold leading-6 text-neutral-title">
        Tu carrito
      </Dialog.Title>
      <button
        type="button"
        onClick={close}
        className="flex-none transition-all w-40 h-40 hover:bg-neutral-alt grid place-items-center rounded-full text-neutral-lighter  hover:text-neutral-text"
      >
        <XIcon className="cursor-pointer" width={28} height={28} />
      </button>
    </header>
  );
};

type Props = {
  close: () => void;
};
