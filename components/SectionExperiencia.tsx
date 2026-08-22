'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSectionParallax } from '@/hooks/useSectionParallax';
import { experiences } from '@/lib/data';

const EXP_ICONS = ['🖥️', '📋', '🗂️', '🔧'];

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return mobile;
}

export default function SectionExperiencia() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useSectionParallax();
  const isMobile = useIsMobile();

  useEffect(() => {
    const update = () => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return;
      const progress = Math.max(0, Math.min(1, -rect.top / scrollable));
      const index = Math.min(
        Math.floor(progress * experiences.length),
        experiences.length - 1
      );
      setActiveIndex(index);
    };

    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  const exp = experiences[activeIndex];

  return (
    <section id="experiencia" ref={sectionRef as React.Ref<HTMLElement>} style={{ padding: 0 }}>
      <div
        ref={containerRef}
        style={{ height: `${experiences.length * 85 + 10}vh`, position: 'relative' }}
      >
        <div
          style={{
            position: 'sticky',
            top: 0,
            height: '100dvh',
            display: 'flex',
            alignItems: 'center',
            padding: isMobile ? '60px 0 24px' : '80px 0',
            overflow: 'hidden',
          }}
        >
          <div className="wrap" style={{ width: '100%' }}>

            {/* Section header */}
            <div className="sec-head" style={{ marginBottom: isMobile ? 20 : 44 }}>
              <h2>Experiencia laboral</h2>
            </div>

            {isMobile ? (
              /* ── MOBILE layout ─────────────────────────── */
              <>
                {/* Horizontal dots navigator */}
                <div style={{ display: 'flex', gap: 8, marginBottom: 24, alignItems: 'center' }}>
                  {experiences.map((e, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      aria-label={e.period}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '4px 0',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 6,
                        flex: 1,
                      }}
                    >
                      <span
                        style={{
                          display: 'block',
                          height: 3,
                          width: '100%',
                          borderRadius: 2,
                          background: i === activeIndex ? 'var(--accent)' : 'var(--line)',
                          transition: 'background 0.3s ease',
                        }}
                      />
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: 9,
                          color: i === activeIndex ? 'var(--accent)' : 'var(--text-soft)',
                          transition: 'color 0.3s ease',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Full-width card */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 28 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="exp-card-3d"
                    style={{ cursor: 'default', padding: '24px 22px' }}
                  >
                    <span className="exp-icon-3d" style={{ transform: 'none', fontSize: 32, marginBottom: 14 }} aria-hidden>
                      {EXP_ICONS[activeIndex]}
                    </span>
                    <div className="exp-card-period">{exp.period}</div>
                    <h3 className="exp-card-title" style={{ fontSize: 20, marginTop: 6 }}>{exp.title}</h3>
                    <p className="exp-card-org" style={{ marginTop: 4 }}>{exp.org}</p>
                    <ul style={{ listStyle: 'none', padding: 0, marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {exp.bullets.map((b, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + i * 0.06, duration: 0.3 }}
                          style={{ fontSize: 13, color: 'var(--text-soft)', paddingLeft: 16, position: 'relative', lineHeight: 1.6 }}
                        >
                          <span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: 700 }}>›</span>
                          {b}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>

                {/* Scroll hint */}
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-soft)', opacity: 0.45, marginTop: 14, textAlign: 'center', letterSpacing: '0.04em' }}>
                  ↓ scroll para avanzar
                </p>
              </>
            ) : (
              /* ── DESKTOP layout ────────────────────────── */
              <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 56, alignItems: 'start' }}>

                {/* Left: index navigator */}
                <nav aria-label="Experiencias" style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {experiences.map((e, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      style={{
                        background: 'none', border: 'none', cursor: 'pointer',
                        display: 'flex', alignItems: 'flex-start', gap: 14,
                        padding: '12px 0', textAlign: 'left',
                        borderBottom: '1px solid var(--line)',
                      }}
                    >
                      <span style={{
                        flexShrink: 0, marginTop: 5, width: 3, height: 32, borderRadius: 4,
                        background: i === activeIndex ? 'var(--accent)' : 'var(--line)',
                        transition: 'background 0.35s ease',
                      }} />
                      <span style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: i === activeIndex ? 'var(--accent)' : 'var(--text-soft)', letterSpacing: '0.05em', transition: 'color 0.3s ease' }}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: i === activeIndex ? 'var(--text)' : 'var(--text-soft)', lineHeight: 1.4, transition: 'color 0.3s ease' }}>
                          {e.period}
                        </span>
                      </span>
                    </button>
                  ))}
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-soft)', opacity: 0.5, marginTop: 20, letterSpacing: '0.04em' }}>
                    ↓ scroll para avanzar
                  </p>
                </nav>

                {/* Right: active card */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 40, filter: 'blur(6px)' }}
                    animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, x: -28, filter: 'blur(4px)' }}
                    transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="exp-card-3d"
                    style={{ cursor: 'default', padding: '36px 40px' }}
                  >
                    <span className="exp-icon-3d" style={{ transform: 'none', fontSize: 44, marginBottom: 22 }} aria-hidden>
                      {EXP_ICONS[activeIndex]}
                    </span>
                    <div className="exp-card-period" style={{ fontSize: 12 }}>{exp.period}</div>
                    <h3 className="exp-card-title" style={{ fontSize: 26, marginTop: 8 }}>{exp.title}</h3>
                    <p className="exp-card-org" style={{ marginTop: 6 }}>{exp.org}</p>
                    <ul style={{ listStyle: 'none', padding: 0, marginTop: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
                      {exp.bullets.map((b, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.12 + i * 0.07, duration: 0.35, ease: 'easeOut' }}
                          style={{ fontSize: 14.5, color: 'var(--text-soft)', paddingLeft: 18, position: 'relative', lineHeight: 1.65 }}
                        >
                          <span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: 700 }}>›</span>
                          {b}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>

              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
