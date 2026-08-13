'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Project } from '@/lib/data';

const ICONS: Record<string, string> = {
  'Sistema de Gestión de Viáticos': '⬡',
  'Sistema de Inventario/POS': '◈',
};

export default function ProjectCard({ project }: { project: Project }) {
  const barRef = useRef<HTMLDivElement>(null);
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

  return (
    <motion.div
      className="proj-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
      ref={barRef}
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
      </div>
    </motion.div>
  );
}
