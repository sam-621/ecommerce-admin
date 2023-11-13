import { type FC, type PropsWithChildren, type ReactElement } from 'react';

import { Breadcrumbs } from '../theme';
import { cn } from '../utils';

export const AdminPageLayout: FC<Props> = ({
  title,
  breadcrumbs = false,
  actions,
  className,
  children
}) => {
  return (
    <div className={cn('flex flex-col gap-8', className)}>
      <div className="flex flex-col gap-3">
        {Boolean(breadcrumbs) && <Breadcrumbs items={[{ label: title }]} />}
        <header className="flex justify-between items-center">
          <h2 className="text-3xl font-semibold tracking-[0.625]">{title}</h2>
          <div>{actions}</div>
        </header>
      </div>
      {children}
    </div>
  );
};

type Props = PropsWithChildren & {
  title: string;
  breadcrumbs?: boolean | { breadcrumb: string };
  actions?: ReactElement;
  className?: string;
};
