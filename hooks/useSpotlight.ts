'use client';

import { useEffect } from 'react';

export function useSpotlight(elementId: string) {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const el = document.getElementById(elementId);
    if (!el) return;

    const handler = (e: MouseEvent) => {
      el.style.setProperty('--mx', e.clientX + 'px');
      el.style.setProperty('--my', e.clientY + 'px');
    };

    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, [elementId]);
}
