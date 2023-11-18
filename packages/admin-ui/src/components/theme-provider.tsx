'use client';

import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';
import NextTopLoader from 'nextjs-toploader';
import * as React from 'react';
import { Toaster } from 'sonner';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <>
      <Toaster />
      <NextTopLoader color="hsl(var(--primary))" />
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </>
  );
}

export const useTheme = () => {
  const { setTheme } = useNextTheme();

  return {
    setLight: () => setTheme('light'),
    setDark: () => setTheme('dark'),
    setSystem: () => setTheme('system')
  };
};
