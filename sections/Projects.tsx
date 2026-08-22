'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Briefcase, Users, Code2, Rocket, Grid3X3 } from 'lucide-react';
import Section from '@/components/Section';

const projects = [
  {
    title: 'Sistema de Gestión de Viáticos',
    description:
      'API REST para la gestión automática de viáticos y reportes empresariales, con flujo de aprobación en cuatro etapas y control de acceso por rol.',
    tags: ['Django', 'DRF', 'React', 'SQL Server'],
    image: '/Viaticos dashordad .png',
    status: 'Operativo',
    statusColor: '#22c55e',
    fill: 96,
  },
  {
    title: 'Sistema de Inventario y POS',
    description:
      'Sistema completo para gestión de inventario, ventas y punto de venta. Depreciación automática y trazabilidad por código QR.',
    tags: ['Django', 'PostgreSQL', 'Tailwind'],
    image: '/investario.png',
    status: 'En desarrollo',
    statusColor: '#f59e0b',
    fill: 55,
  },
];

const bottomStats = [
  { icon: Briefcase, value: '4+', label: 'Proyectos completados con éxito' },
  { icon: Users, value: '100%', label: 'Comprometido con la calidad y los resultados' },
  { icon: Code2, value: 'Tecnologías', label: 'Modernas, escalables y de alto rendimiento' },
  { icon: Rocket, value: 'Impacto real', label: 'Soluciones que generan valor y hacen la diferencia' },
];

export default function Projects() {
  return (
    <Section id="proyectos">
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

        {/* Header */}
        <div className="projects-header">
          <div>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--accent)', marginBottom: '0.5rem' }}>
              PORTAFOLIO
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
              PROYECTOS{' '}
              <span className="glow-text">DESTACADOS</span>
            </h2>
            <div style={{ width: '40px', height: '3px', background: 'linear-gradient(90deg, var(--accent), var(--accent-bright))', borderRadius: '2px', margin: '0.75rem 0 0.875rem' }} />
            <p style={{ fontSize: '0.875rem', color: 'var(--text-soft)', lineHeight: 1.7, maxWidth: '420px' }}>
              Soluciones reales que he diseñado y desarrollado para
              resolver problemas y generar impacto.
            </p>
          </div>

          {/* "Ver todos los proyectos" button */}
          <button
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.625rem',
              padding: '0.7rem 1.25rem',
              background: 'rgba(79,111,174,0.1)',
              border: '1px solid var(--border)',
              borderRadius: '0.625rem',
              color: 'var(--text)',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'border-color 0.2s, box-shadow 0.2s',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              const b = e.currentTarget as HTMLButtonElement;
              b.style.borderColor = 'var(--accent)';
              b.style.boxShadow = '0 0 20px rgba(79,111,174,0.16)';
            }}
            onMouseLeave={(e) => {
              const b = e.currentTarget as HTMLButtonElement;
              b.style.borderColor = 'var(--border)';
              b.style.boxShadow = 'none';
            }}
          >
            <Grid3X3 size={15} />
            Ver todos los proyectos
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Project cards */}
        <div className="formation-2col" style={{ gap: '1.5rem' }}>
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '1.25rem',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'box-shadow 0.3s, border-color 0.3s',
              }}
              onMouseEnter={(e) => {
                const d = e.currentTarget as HTMLElement;
                d.style.boxShadow = '0 12px 60px rgba(79,111,174,0.2)';
                d.style.borderColor = 'rgba(102,132,196,0.38)';
              }}
              onMouseLeave={(e) => {
                const d = e.currentTarget as HTMLElement;
                d.style.boxShadow = 'none';
                d.style.borderColor = 'var(--border)';
              }}
            >
              {/* Dashboard screenshot */}
              <div
                style={{
                  position: 'relative',
                  height: '300px',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, rgba(79,111,174,0.08), rgba(102,132,196,0.04))',
                }}
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
                {/* Gradient fade at bottom */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0, left: 0, right: 0,
                    height: '80px',
                    background: 'linear-gradient(to top, var(--bg-card), transparent)',
                    pointerEvents: 'none',
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* Status */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div
                    style={{
                      width: '8px', height: '8px', borderRadius: '50%',
                      background: p.statusColor,
                      boxShadow: `0 0 8px ${p.statusColor}`,
                    }}
                  />
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: p.statusColor }}>
                    {p.status}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', fontWeight: 800, lineHeight: 1.2, color: 'var(--text)' }}>
                  {p.title}
                </h3>

                {/* Description */}
                <p style={{ fontSize: '0.82rem', color: 'var(--text-soft)', lineHeight: 1.7 }}>
                  {p.description}
                </p>

                {/* Progress */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                    <span style={{ color: 'var(--text-soft)' }}>Avance del proyecto</span>
                    <span style={{ color: 'var(--accent-bright)', fontWeight: 800, fontSize: '0.9rem' }}>{p.fill}%</span>
                  </div>
                  <div style={{ height: '4px', background: 'rgba(255,255,255,0.07)', borderRadius: '99px', overflow: 'hidden' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${p.fill}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: 'easeOut' }}
                      style={{
                        height: '100%',
                        background: 'linear-gradient(90deg, #4F6FAE, #6684C4)',
                        borderRadius: '99px',
                      }}
                    />
                  </div>
                </div>

                {/* Tags + arrow button */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: '0.7rem',
                          fontWeight: 600,
                          color: 'var(--text)',
                          background: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          padding: '0.3rem 0.75rem',
                          borderRadius: '99px',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, var(--accent), var(--accent-bright))',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: '#fff',
                      flexShrink: 0,
                      transition: 'box-shadow 0.2s, transform 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      const b = e.currentTarget as HTMLButtonElement;
                      b.style.boxShadow = '0 0 20px rgba(79,111,174,0.4)';
                      b.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      const b = e.currentTarget as HTMLButtonElement;
                      b.style.boxShadow = 'none';
                      b.style.transform = 'scale(1)';
                    }}
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom stats strip */}
        <div className="projects-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          {bottomStats.map(({ icon: Icon, value, label }, i) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.875rem',
                padding: '1rem 1.125rem',
                background: 'rgba(79,111,174,0.07)',
                border: '1px solid var(--border)',
                borderRadius: '0.875rem',
              }}
            >
              <div
                style={{
                  width: '44px', height: '44px', borderRadius: '0.75rem',
                  background: 'linear-gradient(135deg, rgba(79,111,174,0.32), rgba(102,132,196,0.18))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', flexShrink: 0,
                }}
              >
                <Icon size={20} />
              </div>
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text)', lineHeight: 1 }}>{value}</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-soft)', marginTop: '0.2rem', lineHeight: 1.4 }}>{label}</div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </Section>
  );
}
