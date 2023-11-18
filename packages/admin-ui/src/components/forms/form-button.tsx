'use client';

import { Loader2Icon } from 'lucide-react';
import { type FC, type PropsWithChildren, type ReactElement } from 'react';
import { useFormStatus } from 'react-dom';

import { Button } from '../theme';

export const FormButton: FC<Props> = ({ icon: propIcon, children }) => {
  const { pending } = useFormStatus();

  const Icon = propIcon ?? <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />;

  return (
    <Button type="submit" aria-disabled={pending} disabled={pending}>
      {pending && Icon}
      {children}
    </Button>
  );
};
type Props = PropsWithChildren & {
  icon?: ReactElement;
};
