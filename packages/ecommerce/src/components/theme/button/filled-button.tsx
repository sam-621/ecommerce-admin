import { type ButtonHTMLAttributes, type FC } from 'react';
import { twMerge } from 'tailwind-merge';

export const FilledButton: FC<Props> = ({ children, className, ...rest }) => {
  return (
    <button
      type="button"
      className={twMerge(
        'w-full add-cart-button px-24 relative bg-neutral-title h-48 rounded-lg flex justify-center items-center gap-12 text-neutral-white font-medium text-sm',
        className,
        rest.disabled && 'bg-neutral-border disabled text-neutral-text'
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

type Props = ButtonHTMLAttributes<HTMLButtonElement>;
