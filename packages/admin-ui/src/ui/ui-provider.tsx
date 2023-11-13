'use client';

import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';
import * as React from 'react';

export function UiProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export const useTheme = () => {
  const { setTheme } = useNextTheme();

  return {
    setLight: () => setTheme('light'),
    setDark: () => setTheme('dark'),
    setSystem: () => setTheme('system')
  };
};
