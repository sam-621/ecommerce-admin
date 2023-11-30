import { type FC, type ReactNode } from 'react';

export const HomeSection: FC<Props> = ({ title, children }) => {
  return (
    <section>
      <h2 className="mb-16 md:mb-24 font-bold text-2xl md:text-4xl">{title}</h2>
      <div>{children}</div>
    </section>
  );
};

type Props = {
  title: ReactNode;
  children: ReactNode;
};
