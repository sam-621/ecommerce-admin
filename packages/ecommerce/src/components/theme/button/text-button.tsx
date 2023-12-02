import { type ButtonHTMLAttributes, type FC } from 'react';
import { twMerge } from 'tailwind-merge';

export const TextButton: FC<Props> = ({ children, className, ...rest }) => {
  return (
    <button
      type="button"
      className={twMerge(
        'rounded-lg text-neutral-white text-sm',
        className,
        rest.disabled && 'text-neutral-lighter'
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

type Props = ButtonHTMLAttributes<HTMLButtonElement>;
