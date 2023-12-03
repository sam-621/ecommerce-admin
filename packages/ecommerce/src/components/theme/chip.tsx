import { type FC, type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export const Chip: FC<Props> = ({ children, className }) => {
  return (
    <p
      className={twMerge(
        'w-fit mb-8 uppercase text-xs tracking-wider px-8 py-[2px] rounded-full font-extrabold',
        className
      )}
    >
      {children}
    </p>
  );
};

type Props = {
  children: ReactNode;
  className?: string;
};
