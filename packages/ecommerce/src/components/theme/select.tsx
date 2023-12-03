'use client';

import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon } from 'lucide-react';
import { type FC, type FormEventHandler, Fragment } from 'react';

import { useElement } from '@/lib/hooks';

export const Select: FC<Props> = ({ values, state, disabled, setState, buttonPrefix }) => {
  const { el, elRef } = useElement<HTMLButtonElement>();

  return (
    <Listbox as="div" value={state} onChange={setState} disabled={disabled}>
      <Listbox.Button
        ref={elRef}
        className={`flex justify-between gap-3 items-center border border-[#DDDEE3] cursor-default rounded-lg py-2 px-3 sm:text-sm ${
          disabled ? 'bg-neutral-border' : 'bg-white'
        }`}
      >
        <span
          className={`block font-semibold truncate text-xs ${
            disabled ? 'text-[#808080]' : 'text-neutral-text'
          }`}
        >
          {buttonPrefix}
          {state}
        </span>
        <ChevronDownIcon
          className={`h-[16px] ${disabled ? 'text-[#808080]' : 'text-[#0E1320]'}`}
          aria-hidden="true"
        />
      </Listbox.Button>
      <Transition
        as={Fragment}
        enter="transition ease-in duration-100"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options
          className="z-10 flex flex-col gap-2 absolute mt-1 p-1 border border-[#DDDEE3] rounded-md bg-white text-base sm:text-sm cart_product_quantity_height overflow-y-scroll"
          style={{ width: el?.clientWidth, height: values.length > 5 ? undefined : 'fit-content' }}
        >
          {values.map((value, i) => (
            <Listbox.Option
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              className={({ active }) =>
                `relative cursor-default select-none ${
                  active ? 'bg-gray-300 text-[#0E1320]' : 'text-gray-900'
                }`
              }
              value={value}
            >
              {({ selected }) => (
                <span
                  className={`truncate rounded pl-2 h-[var(--quantity-item-height)] flex items-center ${
                    selected ? 'bg-neutral-border' : 'bg-white'
                  }`}
                >
                  {value}
                </span>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
};

type Props = {
  values: string[];
  state: string;
  setState: SetStateSelect;
  buttonPrefix?: string;
  disabled?: boolean;
};

export type SetStateSelect<T = string> =
  | ((value: T) => void)
  | (FormEventHandler<HTMLDivElement> & ((value: string) => void))
  | undefined;
