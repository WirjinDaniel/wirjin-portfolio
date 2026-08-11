'use client';

import { useEffect, useRef } from 'react';
import type { Project } from '@/lib/data';

export default function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="card reveal"
      ref={ref}
      style={{ ['--fill' as string]: `${project.fill}%` }}
    >
      <div className="card-top">
        <h3>{project.name}</h3>
        <span className={`status ${project.status}`}>
          <span className="sdot" />
          {project.statusLabel}
        </span>
      </div>
      <p className="desc">{project.description}</p>
      <div className="bar-track">
        <div className="bar-fill" />
      </div>
      <div className="bar-label">
        <span>{project.fillLabel}</span>
        <span>{project.fill}%</span>
      </div>
      <div className="tags">
        {project.tags.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </div>
  );
}
