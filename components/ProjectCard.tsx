'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useCardScrollFocus } from '@/hooks/useCardScrollFocus';
import type { Project } from '@/lib/data';

const ICONS: Record<string, string> = {
  'Sistema de Gestión de Viáticos': '⬡',
  'Sistema de Inventario/POS': '◈',
};

export default function ProjectCard({ project }: { project: Project }) {
  const barRef = useRef<HTMLDivElement>(null);
  const focusRef = useCardScrollFocus();
  const [expanded, setExpanded] = useState(false);
  const isTouchRef = useRef(false);
  const icon = ICONS[project.name] ?? '◉';

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const bar = el.querySelector('.bar-fill') as HTMLElement;
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            if (bar) bar.style.width = `${project.fill}%`;
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [project.fill]);

  const handleMouseEnter = useCallback(() => {
    if (!isTouchRef.current) setExpanded(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!isTouchRef.current) setExpanded(false);
  }, []);

  const handleClick = useCallback(() => {
    isTouchRef.current = true;
    setExpanded((v) => !v);
  }, []);

  return (
    <motion.div
      className={`proj-card${expanded ? ' proj-card--expanded' : ''}`}
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as const } },
      }}
      ref={(el) => {
        (barRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
        (focusRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
      }}
      style={{ willChange: 'opacity, transform', cursor: 'pointer' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* Visual header */}
      <div className="proj-vis">
        {project.image ? (
          <>
            <div className="proj-vis-img">
              <Image
                src={project.image}
                alt={`${project.name} dashboard`}
                fill
                style={{ objectFit: 'cover', objectPosition: 'top center' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="proj-vis-overlay" />
          </>
        ) : (
          <>
            <div className="proj-vis-grid" />
            <div className="proj-vis-glow" />
            <div className="proj-vis-icon">{icon}</div>
          </>
        )}
        <span className={`proj-vis-status status ${project.status}`}>
          <span className="sdot" />
          {project.statusLabel}
        </span>
      </div>

      {/* Content */}
      <div className="proj-body">
        <h3 className="proj-name">{project.name}</h3>
        <p className="proj-desc">{project.description}</p>

        {/* Tags */}
        <div className="proj-tags">
          {project.tags.map((t) => (
            <span key={t} className="proj-tag">{t}</span>
          ))}
        </div>

        {/* Progress */}
        <div className="proj-progress">
          <div className="proj-progress-meta">
            <span className="proj-progress-label">{project.fillLabel}</span>
            <span className="proj-progress-pct">{project.fill}%</span>
          </div>
          <div className="bar-track">
            <div className="bar-fill" style={{ width: 0 }} />
          </div>
        </div>

        {/* Expandable highlights */}
        <AnimatePresence>
          {expanded && project.highlights && (
            <motion.div
              key="highlights"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.42, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{ paddingTop: 20, borderTop: '1px solid var(--line)', marginTop: 20 }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12 }}>
                  Características clave
                </p>
                <motion.ul
                  style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
                  }}
                >
                  {project.highlights.map((h, i) => (
                    <motion.li
                      key={i}
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        show: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } },
                      }}
                      style={{ fontSize: 13, color: 'var(--text-soft)', paddingLeft: 16, position: 'relative', lineHeight: 1.6 }}
                    >
                      <span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: 700 }}>›</span>
                      {h}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand hint */}
        <motion.div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            marginTop: 16,
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            color: 'var(--text-soft)',
            letterSpacing: '0.06em',
            opacity: 0.6,
            userSelect: 'none',
          }}
        >
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ display: 'inline-block', fontSize: 12 }}
          >
            ↓
          </motion.span>
          {expanded ? 'CERRAR' : 'VER DETALLES'}
        </motion.div>
      </div>
    </motion.div>
  );
}
