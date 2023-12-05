// import NextTopLoader from 'nextjs-toploader';
import { type FC, type PropsWithChildren } from 'react';

export const ThemeProvider: FC<Props> = ({ children }) => {
  return (
    <>
      {/* <NextTopLoader color="#e14760" /> */}
      {children}
    </>
  );
};

type Props = PropsWithChildren;
