import Link from 'next/link';
import { type AnchorHTMLAttributes, type FC } from 'react';
import { twMerge } from 'tailwind-merge';

export const FilledLinkButton: FC<Props> = ({ children, className, ...rest }) => {
  return (
    <Link href={rest.href}>
      <a
        className={twMerge(
          'flex justify-center items-center w-full bg-neutral-title h-48 rounded-lg text-neutral-white text-16',
          className
        )}
        {...rest}
      >
        {children}
      </a>
    </Link>
  );
};

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};
