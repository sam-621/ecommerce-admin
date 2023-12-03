'use client';

import { useEffect, useRef, useState } from 'react';

export const useElement = <T = HTMLElement>() => {
  const [el, setEl] = useState<T | null>(null);
  const elRef = useRef<T>(null);

  useEffect(() => {
    if (!elRef.current) return;

    setEl(elRef.current);
  }, [elRef]);

  return {
    el,
    elRef
  };
};
