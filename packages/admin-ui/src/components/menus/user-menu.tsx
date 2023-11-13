'use client';
import { Laptop, Moon, Sun, SunMoon, User } from 'lucide-react';

import {
  Avatar,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '../theme';
import { useTheme } from '../theme-provider';

export const UserMenu = () => {
  const { setDark, setLight, setSystem } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size={'icon'} variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar src="https://ui.shadcn.com/avatars/01.png" alt="@sam" fallBack="CN" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2" align="end">
        <DropdownMenuLabel className="font-normal flex flex-col gap-2 p-2">
          <p className="text-sm font-medium leading-none">Admin</p>
          <p className="text-xs leading-none text-muted-foreground">sam_621@gmail.com</p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Perfil</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <SunMoon className="mr-2 h-4 w-4" />
              <span>Tema</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem onClick={setLight}>
                  <Sun className="mr-2 h-4 w-4  scale-100 transition-all" />
                  <span>Claro</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={setSystem}>
                  <Laptop className="mr-2 h-4 w-4 transition-all " />
                  <span>Sistema</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={setDark}>
                  <Moon className="mr-2 h-4 w-4 transition-all " />
                  <span>Obscuro</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
