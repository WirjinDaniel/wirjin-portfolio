'use client';

import { useState, useEffect, useRef } from 'react';

export function useCountUp(target: number) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            if (reduceMotion) {
              setValue(target);
              return;
            }
            let cur = 0;
            const step = Math.max(1, Math.round(target / 30));
            const tick = () => {
              cur += step;
              if (cur >= target) {
                setValue(target);
                return;
              }
              setValue(cur);
              requestAnimationFrame(tick);
            };
            tick();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return { value, ref };
}
