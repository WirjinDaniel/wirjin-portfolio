'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSectionParallax } from '@/hooks/useSectionParallax';
import { stackGroups } from '@/lib/data';

const CATEGORY_ICONS: Record<string, string> = {
  'Backend':      '⚙️',
  'Frontend':     '🖥️',
  'Datos & Infra':'🗄️',
  'Otros':        '🔧',
};

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

export default function SectionStack() {
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
        Math.floor(progress * stackGroups.length),
        stackGroups.length - 1
      );
      setActiveIndex(index);
    };

    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  const group = stackGroups[activeIndex];

  return (
    <section id="stack" ref={sectionRef as React.Ref<HTMLElement>} style={{ padding: 0 }}>
      <div
        ref={containerRef}
        style={{ height: `${stackGroups.length * 80 + 10}vh`, position: 'relative' }}
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

            <div className="sec-head" style={{ marginBottom: isMobile ? 20 : 44 }}>
              <h2>Tecnologías</h2>
            </div>

            {isMobile ? (
              /* ── MOBILE layout ─────────────────────────── */
              <>
                {/* Horizontal scrollable category pills */}
                <div
                  style={{
                    display: 'flex',
                    gap: 8,
                    marginBottom: 24,
                    overflowX: 'auto',
                    scrollbarWidth: 'none',
                    paddingBottom: 2,
                  }}
                >
                  {stackGroups.map((g, i) => (
                    <button
                      key={g.category}
                      onClick={() => setActiveIndex(i)}
                      style={{
                        flexShrink: 0,
                        background: i === activeIndex ? 'var(--accent)' : 'var(--bg-elev)',
                        border: '1px solid',
                        borderColor: i === activeIndex ? 'var(--accent)' : 'var(--line)',
                        borderRadius: 100,
                        cursor: 'pointer',
                        padding: '7px 14px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                        transition: 'background 0.25s ease, border-color 0.25s ease',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <span style={{ fontSize: 13 }}>{CATEGORY_ICONS[g.category] ?? '◈'}</span>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: 11,
                          color: i === activeIndex ? '#060c1f' : 'var(--text-soft)',
                          fontWeight: i === activeIndex ? 600 : 400,
                          transition: 'color 0.25s ease',
                        }}
                      >
                        {g.category}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Active category content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                      <span style={{ fontSize: 28 }}>{CATEGORY_ICONS[group.category] ?? '◈'}</span>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--text)' }}>
                        {group.category}
                      </h3>
                    </div>

                    <motion.div
                      style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}
                      initial="hidden"
                      animate="show"
                      variants={{
                        hidden: {},
                        show: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } },
                      }}
                    >
                      {group.items.map((item) => (
                        <motion.span
                          key={item}
                          variants={{
                            hidden: { opacity: 0, scale: 0.85, y: 6 },
                            show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.28 } },
                          }}
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: 12,
                            background: 'var(--bg-elev)',
                            border: '1px solid var(--line)',
                            padding: '8px 14px',
                            borderRadius: 100,
                            color: 'var(--text)',
                          }}
                        >
                          {item}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-soft)', opacity: 0.45, marginTop: 20, textAlign: 'center', letterSpacing: '0.04em' }}>
                  ↓ scroll para avanzar
                </p>
              </>
            ) : (
              /* ── DESKTOP layout ────────────────────────── */
              <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 56, alignItems: 'start' }}>

                {/* Left: category tabs */}
                <nav aria-label="Categorías" style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {stackGroups.map((g, i) => (
                    <button
                      key={g.category}
                      onClick={() => setActiveIndex(i)}
                      style={{
                        background: i === activeIndex ? 'var(--bg-elev)' : 'none',
                        border: '1px solid',
                        borderColor: i === activeIndex ? 'rgba(78,142,247,0.35)' : 'transparent',
                        borderRadius: 10,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        padding: '10px 14px',
                        textAlign: 'left',
                        transition: 'background 0.25s ease, border-color 0.25s ease',
                      }}
                    >
                      <span style={{ fontSize: 16 }}>{CATEGORY_ICONS[g.category] ?? '◈'}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: i === activeIndex ? 'var(--accent)' : 'var(--text-soft)', transition: 'color 0.25s ease' }}>
                        {g.category}
                      </span>
                      {i === activeIndex && (
                        <motion.span
                          layoutId="active-dot"
                          style={{ marginLeft: 'auto', width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }}
                        />
                      )}
                    </button>
                  ))}
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-soft)', opacity: 0.45, marginTop: 18, letterSpacing: '0.04em' }}>
                    ↓ scroll para navegar
                  </p>
                </nav>

                {/* Right: active category */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <div style={{ marginBottom: 28, display: 'flex', alignItems: 'center', gap: 14 }}>
                      <span style={{ fontSize: 36 }}>{CATEGORY_ICONS[group.category] ?? '◈'}</span>
                      <div>
                        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 4 }}>
                          {String(activeIndex + 1).padStart(2, '0')} / {String(stackGroups.length).padStart(2, '0')}
                        </p>
                        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700, color: 'var(--text)' }}>
                          {group.category}
                        </h3>
                      </div>
                    </div>

                    <motion.div
                      style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}
                      initial="hidden"
                      animate="show"
                      variants={{
                        hidden: {},
                        show: { transition: { staggerChildren: 0.055, delayChildren: 0.1 } },
                      }}
                    >
                      {group.items.map((item) => (
                        <motion.span
                          key={item}
                          variants={{
                            hidden: { opacity: 0, scale: 0.85, y: 8 },
                            show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.32 } },
                          }}
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: 13.5,
                            background: 'var(--bg-elev)',
                            border: '1px solid var(--line)',
                            padding: '10px 18px',
                            borderRadius: 100,
                            color: 'var(--text)',
                          }}
                        >
                          {item}
                        </motion.span>
                      ))}
                    </motion.div>
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
