'use client';

import { useEffect, useRef } from 'react';

export default function ScrollProgressBar() {
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const fill = fillRef.current;
      if (!fill) return;
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      fill.style.transform = `scaleX(${total > 0 ? scrolled / total : 0})`;
    };

    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        zIndex: 100,
        background: 'var(--line)',
        pointerEvents: 'none',
      }}
    >
      <div
        ref={fillRef}
        style={{
          height: '100%',
          background: 'var(--accent)',
          transformOrigin: 'left center',
          transform: 'scaleX(0)',
        }}
      />
    </div>
  );
}
