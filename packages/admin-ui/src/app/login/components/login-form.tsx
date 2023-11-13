/* eslint-disable @typescript-eslint/no-misused-promises */

import { Button, Input, Label } from '@/components/theme';
import { cn } from '@/components/utils';

export function LoginForm() {
  return (
    <div className={cn('grid gap-6')}>
      <form>
        <div className="grid gap-6">
          <div className="grid gap-1">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="name@example.com" type="text" autoCapitalize="none" />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="*****" type="password" autoCapitalize="none" />
          </div>
          <Button>
            {/* {isLoading && <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />} */}
            Entrar
          </Button>
        </div>
      </form>
    </div>
  );
}
