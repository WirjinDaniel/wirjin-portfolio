'use client';

import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { experiences } from '@/lib/data';

const EXP_ICONS = ['🖥️', '📋', '🗂️', '🔧'];

function ExpCard3D({
  exp,
  icon,
  index,
}: {
  exp: (typeof experiences)[0];
  icon: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (open) return;
      const card = cardRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      card.style.setProperty('--rot-x', `${-dy * 10}deg`);
      card.style.setProperty('--rot-y', `${dx * 10}deg`);
    },
    [open]
  );

  const resetTilt = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--rot-x', '0deg');
    card.style.setProperty('--rot-y', '0deg');
  }, []);

  const toggle = () => {
    resetTilt();
    setOpen((v) => !v);
  };

  return (
    <motion.div
      className="exp-tilt-wrap"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.08,
      }}
    >
      <div
        ref={cardRef}
        className={`exp-card-3d${open ? ' exp-card-3d--open' : ''}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
      >
        {/* Icon â€” floats in Z */}
        <span className="exp-icon-3d" aria-hidden>
          {icon}
        </span>

        {/* Period */}
        <div className="exp-card-period">{exp.period}</div>

        {/* Title */}
        <h3 className="exp-card-title">{exp.title}</h3>

        {/* Org */}
        <p className="exp-card-org">{exp.org}</p>

        {/* Expandable bullets */}
        <div className={`exp-bullets${open ? ' exp-bullets--open' : ''}`} aria-hidden={!open}>
          <ul>
            {exp.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>

        {/* Toggle button */}
        <button className="exp-learn-more" onClick={toggle} aria-expanded={open}>
          {open ? 'CERRAR â†' : 'VER MÃS â†’'}
        </button>
      </div>
    </motion.div>
  );
}

export default function SectionExperiencia() {
  const headRef = useScrollReveal();

  return (
    <section id="experiencia">
      <div className="wrap">
        <div className="sec-head reveal" ref={headRef as React.Ref<HTMLDivElement>}>
          <h2>Experiencia laboral</h2>
        </div>
        <div className="exp-grid">
          {experiences.map((exp, i) => (
            <ExpCard3D key={exp.period} exp={exp} icon={EXP_ICONS[i]} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
