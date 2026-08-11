'use client';

import { useEffect, useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { skills, languages, aptitudes } from '@/lib/data';

function SkillBar({ name, level, delay = 0 }: { name: string; level: number; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const bar = el.querySelector('.hbar-fill') as HTMLElement;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (bar) bar.style.width = `${level}%`;
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div className="hbar-item" ref={ref}>
      <div className="hbar-meta">
        <span className="hbar-name">{name}</span>
        <span className="hbar-pct">{level}%</span>
      </div>
      <div className="hbar-track">
        <div className="hbar-fill" style={{ width: 0 }} />
      </div>
    </div>
  );
}

export default function SectionHabilidades() {
  const headRef = useScrollReveal();

  return (
    <section id="habilidades">
      <div className="wrap">
        <div className="sec-head reveal" ref={headRef as React.Ref<HTMLDivElement>}>
          <span className="tag">04</span>
          <h2>Habilidades</h2>
        </div>

        <div className="hab-grid">
          <div className="hab-col">
            <h4 className="hab-subtitle">Tecnologías</h4>
            {skills.map((s, i) => (
              <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 80} />
            ))}
          </div>

          <div className="hab-col">
            <h4 className="hab-subtitle">Idiomas</h4>
            {languages.map((l, i) => (
              <SkillBar key={l.name} name={l.name} level={l.level} delay={i * 80} />
            ))}

            <h4 className="hab-subtitle" style={{ marginTop: 32 }}>Aptitudes</h4>
            <div className="aptitudes-grid">
              {aptitudes.map((a) => (
                <div key={a} className="aptitud-chip">{a}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
