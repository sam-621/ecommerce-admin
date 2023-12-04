import { Dialog, Transition } from '@headlessui/react';
import { type FC, Fragment, type ReactNode } from 'react';

export const CartTooltipWrapper: FC<Props> = ({ isOpen, close, children }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[200]" onClose={close}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[#19272E]/75 backdrop-blur-sm bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-end text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 "
              leaveTo="opacity-0 "
            >
              <Dialog.Panel className="flex flex-col h-screen w-[450px] max-w-md transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all">
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

type Props = {
  children: ReactNode;
  isOpen: boolean;
  close: () => void;
};
