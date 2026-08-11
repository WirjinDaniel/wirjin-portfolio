'use client';

import { useEffect, useState } from 'react';

const css = `
@keyframes ws-ring {
  from { stroke-dashoffset: 283; }
  to   { stroke-dashoffset: 0; }
}
@keyframes ws-fade-in {
  from { opacity: 0; transform: scale(0.85); }
  to   { opacity: 1; transform: scale(1); }
}
@keyframes ws-glitch-1 {
  0%,100% { clip-path: inset(0 0 100% 0); transform: translate(0); }
  10%      { clip-path: inset(10% 0 60% 0); transform: translate(-4px, 2px); }
  30%      { clip-path: inset(50% 0 20% 0); transform: translate(4px, -2px); }
  50%      { clip-path: inset(20% 0 70% 0); transform: translate(-2px, 1px); }
  70%      { clip-path: inset(70% 0 10% 0); transform: translate(3px, -1px); }
  90%      { clip-path: inset(30% 0 40% 0); transform: translate(-3px, 2px); }
}
@keyframes ws-glitch-2 {
  0%,100% { clip-path: inset(100% 0 0 0); transform: translate(0); }
  15%     { clip-path: inset(60% 0 10% 0); transform: translate(4px, -2px); }
  35%     { clip-path: inset(20% 0 50% 0); transform: translate(-4px, 2px); }
  55%     { clip-path: inset(70% 0 20% 0); transform: translate(2px, -1px); }
  75%     { clip-path: inset(10% 0 60% 0); transform: translate(-3px, 1px); }
}
@keyframes ws-dot {
  0%, 80%, 100% { opacity: 0.2; transform: scaleY(0.6); }
  40%            { opacity: 1;   transform: scaleY(1); }
}
@keyframes ws-scan {
  from { transform: translateY(-100%); }
  to   { transform: translateY(200%); }
}
@keyframes ws-grid-fade {
  from { opacity: 0; }
  to   { opacity: 0.07; }
}
`;

export default function BootSequence() {
  const [phase, setPhase] = useState<'idle' | 'active' | 'exit' | 'done'>('idle');

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) { setPhase('done'); return; }

    const t0 = setTimeout(() => setPhase('active'), 60);
    const t1 = setTimeout(() => setPhase('exit'), 2400);
    const t2 = setTimeout(() => setPhase('done'), 2900);
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (phase === 'done') return null;

  const active = phase === 'active' || phase === 'exit';

  return (
    <>
      <style>{css}</style>
      <div style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: '#060d18',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 28,
        opacity: phase === 'exit' ? 0 : 1,
        transition: phase === 'exit' ? 'opacity 0.55s cubic-bezier(0.4,0,1,1)' : 'none',
        overflow: 'hidden',
      }}>

        {/* Dot grid background */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle, rgba(79,209,174,0.55) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          animation: active ? 'ws-grid-fade 0.8s ease forwards' : 'none',
          opacity: 0,
        }} />

        {/* Scan line */}
        {active && (
          <div style={{
            position: 'absolute', left: 0, right: 0, height: 120,
            background: 'linear-gradient(to bottom, transparent, rgba(79,209,174,0.04), transparent)',
            animation: 'ws-scan 2s linear infinite',
            pointerEvents: 'none',
          }} />
        )}

        {/* Logo + ring */}
        <div style={{ position: 'relative', width: 120, height: 120 }}>

          {/* SVG ring */}
          <svg
            width="120" height="120"
            style={{ position: 'absolute', inset: 0, transform: 'rotate(-90deg)' }}
          >
            {/* track */}
            <circle cx="60" cy="60" r="45" fill="none"
              stroke="rgba(79,209,174,0.12)" strokeWidth="1.5" />
            {/* animated stroke */}
            <circle cx="60" cy="60" r="45" fill="none"
              stroke="url(#ringGrad)" strokeWidth="1.5"
              strokeDasharray="283"
              strokeDashoffset={active ? undefined : 283}
              strokeLinecap="round"
              style={active ? { animation: 'ws-ring 1.2s cubic-bezier(0.4,0,0.2,1) forwards' } : {}}
            />
            <defs>
              <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4FD1AE" />
                <stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>
            </defs>
          </svg>

          {/* Corner tick marks */}
          {[0, 90, 180, 270].map((deg) => (
            <div key={deg} style={{
              position: 'absolute', inset: 0,
              display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
              transform: `rotate(${deg}deg)`,
            }}>
              <div style={{
                width: 6, height: 1.5,
                background: 'rgba(79,209,174,0.6)',
                marginTop: 13,
                opacity: active ? 1 : 0,
                transition: 'opacity 0.4s ease 0.8s',
              }} />
            </div>
          ))}

          {/* WS monogram with glitch */}
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {/* base */}
            <span style={{
              fontFamily: 'var(--font-display, sans-serif)',
              fontSize: 32, fontWeight: 700, letterSpacing: '-1px',
              color: '#e8f4f1',
              opacity: active ? 1 : 0,
              animation: active ? 'ws-fade-in 0.4s ease 0.3s both' : 'none',
              position: 'relative',
              userSelect: 'none',
            }}>
              WS
              {/* glitch layer 1 */}
              <span aria-hidden style={{
                position: 'absolute', inset: 0,
                color: '#4FD1AE',
                animation: active ? 'ws-glitch-1 2s step-end 0.6s infinite' : 'none',
              }}>WS</span>
              {/* glitch layer 2 */}
              <span aria-hidden style={{
                position: 'absolute', inset: 0,
                color: '#38bdf8',
                animation: active ? 'ws-glitch-2 2s step-end 0.9s infinite' : 'none',
              }}>WS</span>
            </span>
          </div>
        </div>

        {/* Loading dots */}
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{
              width: 4, height: 14,
              borderRadius: 999,
              background: 'linear-gradient(to bottom, #4FD1AE, #38bdf8)',
              opacity: active ? 1 : 0,
              animation: active
                ? `ws-dot 1s ease-in-out ${i * 0.15}s infinite`
                : 'none',
            }} />
          ))}
        </div>

      </div>
    </>
  );
}
