/* eslint-disable @typescript-eslint/no-misused-promises */
'use client';

import { LoaderIcon } from 'lucide-react';
import * as React from 'react';

import { Button, Input, Label } from '@/ui/components/theme';
import { cn } from '@/ui/utils';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-6">
          <div className="grid gap-1">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              placeholder="name@example.com"
              type="text"
              autoCapitalize="none"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="*****"
              type="password"
              autoCapitalize="none"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />}
            Entrar
          </Button>
        </div>
      </form>
    </div>
  );
}
