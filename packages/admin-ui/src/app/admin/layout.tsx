import { type Metadata } from 'next';
import { type PropsWithChildren } from 'react';

import { AppLayout } from '@/components/layouts';

export const metadata: Metadata = {
  title: 'Vendyx | Admin'
};

export default function Layout({ children }: Props) {
  return <AppLayout>{children}</AppLayout>;
}

type Props = PropsWithChildren;
