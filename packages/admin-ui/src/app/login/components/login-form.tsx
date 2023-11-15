'use client';

import { AlertCircleIcon, Loader2Icon } from 'lucide-react';
import { useFormState, useFormStatus } from 'react-dom';

import { Button, Input, Label } from '@/components/theme';
import { cn } from '@/components/utils';
import { authenticate } from '@/core/auth';

export function LoginForm() {
  const [error, action] = useFormState(authenticate, undefined);

  return (
    <div className={cn('grid gap-6')}>
      <form action={action}>
        <div className="grid gap-6">
          <div className="grid gap-1">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              name="username"
              placeholder="sam_621"
              type="text"
              autoCapitalize="none"
            />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              placeholder="*****"
              type="password"
              autoCapitalize="none"
            />
          </div>
          <FormButton />
          <div className="flex h-5 items-center gap-2">
            {error && (
              <>
                <AlertCircleIcon className="h-5 w-5 text-red-500" />
                <p aria-live="polite" className="text-sm text-red-500">
                  {error}
                </p>
              </>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

const FormButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button aria-disabled={pending} disabled={pending}>
      {pending && <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />}
      Entrar
    </Button>
  );
};
