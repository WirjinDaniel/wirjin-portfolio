'use client';

import { useEffect, useRef } from 'react';

/**
 * Cards outside the center of the viewport get slightly dimmed and scaled down.
 * Cards near the center get full opacity and scale = 1.
 * This runs on every scroll frame (scrubbed), giving a continuous focus effect.
 */
export function useCardScrollFocus() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      // distance from center, normalized 0–1
      const dist = Math.abs(center - viewportCenter) / (window.innerHeight * 0.6);
      const clamped = Math.min(dist, 1);
      const opacity = 1 - clamped * 0.38;
      const scale = 1 - clamped * 0.025;
      el.style.opacity = String(opacity);
      el.style.transform = `scale(${scale})`;
    };

    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  return ref;
}
