'use client';

import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { experiences } from '@/lib/data';

const expIcons = ['🖥️', '📋', '🗂️', '🔧'];

function ExpCard({ exp, icon, index }: { exp: (typeof experiences)[0]; icon: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`exp-card ${open ? 'exp-card--open' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="exp-card-glow" />
      <div className="exp-card-inner">
        <div className="exp-card-icon">{icon}</div>
        <div className="exp-card-body">
          <div className="exp-card-period">{exp.period}</div>
          <h3 className="exp-card-title">{exp.title}</h3>
          <p className="exp-card-org">{exp.org}</p>

          <div className={`exp-card-bullets ${open ? 'exp-card-bullets--open' : ''}`}>
            <ul>
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>

          <button
            className="exp-learn-more"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
          >
            {open ? 'CERRAR ←' : 'VER MÁS →'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function SectionExperiencia() {
  const headRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section id="experiencia">
      <div className="wrap">
        <div className="sec-head reveal" ref={headRef as React.Ref<HTMLDivElement>}>
          <span className="tag">02</span>
          <h2>Experiencia laboral</h2>
        </div>
        <div className="exp-grid reveal" ref={gridRef as React.Ref<HTMLDivElement>}>
          {experiences.map((exp, i) => (
            <ExpCard key={exp.period} exp={exp} icon={expIcons[i]} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
