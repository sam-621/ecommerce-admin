import { type PropsWithChildren } from 'react';

import { AppLayout } from '@/components/layouts';

export default function Layout({ children }: Props) {
  return <AppLayout>{children}</AppLayout>;
}

type Props = PropsWithChildren;
