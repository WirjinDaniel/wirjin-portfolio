'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, Code2, Zap } from 'lucide-react';
import Section from '@/components/Section';
import { useCountUp } from '@/hooks/useCountUp';

const stats = [
  { value: 2, suffix: '+', label: 'Años de experiencia', icon: Calendar },
  { value: 2, suffix: '+', label: 'Proyectos completados', icon: Code2 },
  { value: 100, suffix: '%', label: 'Comprometido', icon: Zap },
];

function Stat({ value, suffix, label, icon: Icon }: typeof stats[number]) {
  const { value: count, ref } = useCountUp(value);
  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.875rem',
        padding: '1rem 1.25rem',
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: '0.75rem',
        flex: 1,
      }}
    >
      <div
        style={{
          width: '36px',
          height: '36px',
          borderRadius: '0.5rem',
          background: 'rgba(79,111,174,0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--accent-bright)',
          flexShrink: 0,
        }}
      >
        <Icon size={16} />
      </div>
      <div>
        <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-bright)', lineHeight: 1 }}>
          {count}{suffix}
        </div>
        <div style={{ fontSize: '0.65rem', color: 'var(--text-soft)', marginTop: '0.2rem' }}>{label}</div>
      </div>
    </div>
  );
}

const bullets = [
  'Analista de Sistemas en INABIE — Dirección de Tecnología (2024–presente)',
  'Especializado en Backend: Python · Django REST Framework · SQL Server',
  'Experiencia diseñando sistemas institucionales de flujo controlado',
  'Frontend con React.js y Next.js',
];

export default function About() {
  return (
    <Section id="sobre-mi">
      <div className="about-grid">
        {/* Left */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {/* Title */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '0.5rem',
                  background: 'rgba(79,111,174,0.12)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-bright)',
                }}
              >
                <Code2 size={15} />
              </div>
              <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--accent)' }}>
                SOBRE MÍ
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
              SOBRE MÍ
            </h2>
            <div style={{ width: '40px', height: '3px', background: 'linear-gradient(90deg, var(--accent), var(--accent-bright))', borderRadius: '2px', marginTop: '0.6rem' }} />
          </div>

          <p style={{ fontSize: '0.875rem', color: 'var(--text-soft)', lineHeight: 1.8 }}>
            Soy un desarrollador backend apasionado por crear soluciones robustas, eficientes y escalables.
            Cuento con experiencia en el diseño de APIs, bases de datos y sistemas empresariales con flujo
            controlado: solicitudes, aprobaciones y auditoría.
          </p>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {bullets.map((b, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
                style={{ display: 'flex', gap: '0.625rem', fontSize: '0.8rem', color: 'var(--text-soft)', alignItems: 'flex-start' }}
              >
                <span style={{ color: 'var(--accent-bright)', flexShrink: 0, marginTop: '0.2em', fontSize: '0.6rem' }}>▶</span>
                {b}
              </motion.li>
            ))}
          </ul>

          {/* Stats */}
          <div className="flex-wrap-mobile" style={{ gap: '0.75rem' }}>
            {stats.map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </div>
        </div>

        {/* Right: desk image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            height: '380px',
            borderRadius: '1.25rem',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 0 60px rgba(79,111,174,0.14), 0 0 120px rgba(79,111,174,0.07)',
          }}
        >
          <Image
            src="/laptop.png"
            alt="Developer desk setup"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          {/* Subtle overlay to blend with theme */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(6,6,26,0.15) 0%, transparent 60%)',
              pointerEvents: 'none',
            }}
          />
          {/* Bottom fade */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '60px',
              background: 'linear-gradient(to top, rgba(6,6,26,0.5), transparent)',
              pointerEvents: 'none',
            }}
          />
        </motion.div>
      </div>
    </Section>
  );
}
