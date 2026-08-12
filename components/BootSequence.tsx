'use client';

import { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';

const BootCanvas = dynamic(() => import('./BootCanvas'), { ssr: false });

const css = `
@keyframes boot-canvas-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes boot-photo-in {
  from { opacity: 0; transform: scale(0.88) translateY(10px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}
@keyframes boot-text-in {
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes boot-sub-in {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 0.55; transform: translateY(0); }
}
@keyframes boot-bar-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes boot-dot {
  0%, 80%, 100% { opacity: 0.2; transform: scale(0.75); }
  40%           { opacity: 1;   transform: scale(1); }
}
@keyframes boot-progress-fill {
  0%   { width: 0%; }
  15%  { width: 12%; }
  40%  { width: 38%; }
  65%  { width: 62%; }
  85%  { width: 84%; }
  100% { width: 100%; }
}
@keyframes boot-photo-ring-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(79,209,174,0), 0 0 22px rgba(79,209,174,0.2); }
  50%       { box-shadow: 0 0 0 6px rgba(79,209,174,0.12), 0 0 40px rgba(79,209,174,0.35); }
}
`;

const DOT_COUNT = 6;

export default function BootSequence() {
  const [phase, setPhase] = useState<'idle' | 'active' | 'exit' | 'done'>('idle');
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) { setPhase('done'); return; }

    const t0 = setTimeout(() => setPhase('active'), 60);
    const t1 = setTimeout(() => setPhase('exit'), 14000);
    const t2 = setTimeout(() => setPhase('done'), 14600);
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // Smooth progress counter
  useEffect(() => {
    if (phase !== 'active') return;
    const start = Date.now();
    const duration = 5000;
    const tick = () => {
      const t = Math.min(1, (Date.now() - start) / duration);
      // Ease: fast start, slow finish
      const eased = t < 0.8 ? t * 1.1 : 0.88 + (t - 0.8) * 0.6;
      setProgress(Math.min(100, Math.round(eased * 100)));
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [phase]);

  if (phase === 'done') return null;

  const active = phase === 'active' || phase === 'exit';
  const activeDot = Math.floor((progress / 100) * DOT_COUNT);

  return (
    <>
      <style>{css}</style>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          background: '#0b1220',
          opacity: phase === 'exit' ? 0 : 1,
          transition: phase === 'exit' ? 'opacity 0.55s cubic-bezier(0.4,0,1,1)' : 'none',
        }}
      >
        {/* 3D Canvas background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            animation: active ? 'boot-canvas-in 0.8s ease forwards' : 'none',
            opacity: 0,
          }}
        >
          <BootCanvas />
        </div>

        {/* Central content overlay */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 0,
            marginTop: '-60px',
          }}
        >
          {/* Photo */}
          <div
            style={{
              width: 148,
              height: 148,
              borderRadius: '50%',
              overflow: 'hidden',
              border: '2px solid rgba(79,209,174,0.55)',
              background: '#0d1a2a',
              flexShrink: 0,
              animation: active
                ? 'boot-photo-in 0.7s cubic-bezier(0.25,0.46,0.45,0.94) 0.2s both, boot-photo-ring-pulse 2.5s ease-in-out 0.9s infinite'
                : 'none',
              opacity: 0,
            }}
          >
            <img
              src="/me.webp"
              alt="Wirjin Sanchez"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
              }}
              onError={(e) => {
                const el = e.currentTarget as HTMLImageElement;
                el.style.display = 'none';
                const parent = el.parentElement!;
                parent.style.display = 'flex';
                parent.style.alignItems = 'center';
                parent.style.justifyContent = 'center';
                parent.innerHTML = '<span style="font-family:var(--font-display,sans-serif);font-size:38px;font-weight:700;color:#4fd1ae">WS</span>';
              }}
            />
          </div>

          {/* Text block */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
              marginTop: 28,
            }}
          >
            <h1
              style={{
                fontFamily: 'var(--font-display, sans-serif)',
                fontSize: 'clamp(20px, 3vw, 26px)',
                fontWeight: 700,
                letterSpacing: '-0.01em',
                color: '#e7ecf3',
                margin: 0,
                animation: active ? 'boot-text-in 0.6s ease 0.45s both' : 'none',
                opacity: 0,
                textAlign: 'center',
              }}
            >
              Building{' '}
              <span style={{ color: '#4fd1ae' }}>digital</span>
              {' '}experiences
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: 12,
                color: '#8b96aa',
                letterSpacing: '0.05em',
                margin: 0,
                animation: active ? 'boot-sub-in 0.6s ease 0.6s both' : 'none',
                opacity: 0,
              }}
            >
              Loading portfolio...
            </p>
          </div>

          {/* Dots indicator */}
          <div
            style={{
              display: 'flex',
              gap: 7,
              alignItems: 'center',
              marginTop: 28,
              animation: active ? 'boot-bar-in 0.4s ease 0.75s both' : 'none',
              opacity: 0,
            }}
          >
            {Array.from({ length: DOT_COUNT }).map((_, i) => (
              <div
                key={i}
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: i <= activeDot ? '#4fd1ae' : 'rgba(79,209,174,0.2)',
                  transition: 'background 0.3s ease',
                  boxShadow: i === activeDot ? '0 0 6px rgba(79,209,174,0.7)' : 'none',
                }}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div
            style={{
              width: 220,
              marginTop: 14,
              animation: active ? 'boot-bar-in 0.4s ease 0.8s both' : 'none',
              opacity: 0,
            }}
          >
            <div
              style={{
                width: '100%',
                height: 2,
                background: 'rgba(79,209,174,0.12)',
                borderRadius: 999,
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  height: '100%',
                  borderRadius: 999,
                  background: 'linear-gradient(90deg, #4fd1ae, #38bdf8)',
                  width: `${progress}%`,
                  transition: 'width 0.12s linear',
                  boxShadow: '0 0 8px rgba(79,209,174,0.6)',
                }}
              />
            </div>
            <div
              style={{
                textAlign: 'center',
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: 11,
                color: '#4fd1ae',
                marginTop: 8,
                letterSpacing: '0.04em',
              }}
            >
              {progress}%
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
