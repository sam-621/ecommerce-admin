'use client';

import { AlertCircleIcon } from 'lucide-react';
import { useFormState } from 'react-dom';

import { FormButton } from '@/components/forms';
import { Input } from '@/components/theme';
import { cn } from '@/components/utils';

import { authenticate } from '../actions';

export function LoginForm() {
  const [state, action] = useFormState(authenticate, { message: '', error: false });

  return (
    <div className={cn('grid gap-6')}>
      <form action={action}>
        <div className="grid gap-6">
          <div className="grid gap-1">
            <Input
              id="username"
              label="Username"
              name="username"
              placeholder="sam_621"
              type="text"
              autoCapitalize="none"
              errorMessage={state?.fieldErrors?.username}
            />
          </div>
          <div className="grid gap-1">
            <Input
              id="password"
              label="Password"
              name="password"
              placeholder="******"
              type="password"
              autoCapitalize="none"
              errorMessage={state?.fieldErrors?.password}
            />
          </div>
          <FormButton>Entrar</FormButton>
          <div className="flex h-5 items-center gap-2">
            {state?.error && (
              <>
                <AlertCircleIcon className="h-5 w-5 text-red-500" />
                <p aria-live="polite" className="text-sm text-red-500">
                  {state?.message}
                </p>
              </>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
