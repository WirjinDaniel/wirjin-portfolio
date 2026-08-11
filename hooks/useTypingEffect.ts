'use client';

import { useState, useEffect } from 'react';

export function useTypingEffect(text: string, delay = 650, speed = 14) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setDisplayed(text);
      setDone(true);
      return;
    }

    let i = 0;
    let timeout: ReturnType<typeof setTimeout>;
    let raf: ReturnType<typeof setTimeout>;

    const start = () => {
      const tick = () => {
        if (i <= text.length) {
          setDisplayed(text.slice(0, i));
          i++;
          raf = setTimeout(tick, speed);
        } else {
          setDone(true);
        }
      };
      tick();
    };

    timeout = setTimeout(start, delay);
    return () => {
      clearTimeout(timeout);
      clearTimeout(raf);
    };
  }, [text, delay, speed]);

  return { displayed, done };
}
