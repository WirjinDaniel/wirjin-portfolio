'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, GraduationCap, Award, BookOpen, Star } from 'lucide-react';
import Section from '@/components/Section';
import Card from '@/components/Card';

const education = [
  {
    icon: '🖥️',
    title: 'Licenciatura en Ciencias Computacionales',
    institution: 'UFHEC',
    year: '2018 – 2023',
    description: 'Formación integral en desarrollo de software, algoritmos y sistemas computacionales.',
  },
  {
    icon: '</>',
    mono: true,
    title: 'Fundamentos Técnicos del Computador',
    institution: 'ITLA',
    year: '2021',
    description: 'Introducción a la arquitectura de computadoras, sistemas operativos y redes.',
  },
  {
    icon: '⚙️',
    title: 'Introducción a la Programación',
    institution: 'ITLA',
    year: '2021',
    description: 'Lógica de programación, estructuras de datos y resolución de problemas.',
  },
  {
    icon: '🛡️',
    title: 'Servicios Auxiliares en Ciberseguridad',
    institution: 'INFOTEP',
    year: '2023',
    description: 'Conceptos esenciales de seguridad informática, análisis de amenazas y protección de datos.',
  },
  {
    icon: '⭐',
    title: 'Calidad en el Servicio',
    institution: 'INFOTEP',
    year: '2022',
    description: 'Mejores prácticas en atención al cliente y gestión de servicios de calidad.',
  },
];

const certifications = [
  {
    img: '/python.png',
    iconBg: '#1e3a5f',
    title: 'Python',
    platform: 'Udemy',
    year: '2023',
    description: 'Programación en Python desde cero hasta aplicaciones avanzadas.',
  },
  {
    img: '/django.png',
    iconBg: '#092e20',
    title: 'Django',
    platform: 'Udemy',
    year: '2023',
    description: 'Desarrollo web con Django, modelos, vistas, autenticación y más.',
  },
  {
    img: '/power-bi.png',
    iconBg: '#1a2a3a',
    title: 'Power BI',
    platform: 'Capacitación Kaliss',
    year: '2023',
    description: 'Visualización de datos, dashboards y análisis empresarial con Power BI.',
  },
  {
    img: null,
    icon: '🤖',
    iconBg: '#1a1a3a',
    title: 'Apps de IA Generativa',
    platform: 'Coursera',
    year: '2024',
    description: 'Transforma tu trabajo usando herramientas de inteligencia artificial generativa.',
  },
  {
    img: null,
    icon: '🌐',
    iconBg: '#1a2a1a',
    title: 'Cómo Crear una Página Web',
    platform: 'Udemy',
    year: '2023',
    description: 'Desarrollo de sitios web con WordPress desde cero.',
  },
];

const quote = 'La educación es el arma más poderosa que puedes usar para cambiar el mundo.';
const quoteAuthor = '— Nelson Mandela';

const bottomStats = [
  { icon: BookOpen, value: '5', label: 'Formaciones\nAcadémicas' },
  { icon: Award, value: '5', label: 'Certificaciones\nObtenidas' },
  { icon: Star, value: '+1000', label: 'Horas de\nAprendizaje' },
];

export default function Formation() {
  return (
    <Section id="formacion">
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

        {/* Header */}
        <div className="projects-header">
          <div>
            <div style={{ fontSize: '0.65rem', fontWeight: 'var(--font-bold)', letterSpacing: '0.2em', color: 'var(--accent-bright)', marginBottom: '0.5rem' }}>
              MI CAMINO DE APRENDIZAJE
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 'var(--font-black)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              FORMACIÓN Y{' '}
              <span className="glow-text">CERTIFICACIONES</span>
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-soft)', lineHeight: 1.7, marginTop: '0.75rem', maxWidth: '520px' }}>
              Mi compromiso con el aprendizaje continuo y el crecimiento profesional
              a través de estudios y certificaciones especializadas.
            </p>
          </div>

          {/* Graduation cap illustration */}
          <div
            style={{
              width: '100px',
              height: '100px',
              borderRadius: 'var(--radius-full)',
              background: 'radial-gradient(circle, rgba(79,111,174,0.16) 0%, transparent 70%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem',
              flexShrink: 0,
            }}
          >
            🎓
          </div>
        </div>

        {/* Two columns */}
        <div className="formation-2col">

          {/* Left: Educación académica */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem',
                marginBottom: '1.25rem',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid var(--border)',
              }}
            >
              <div
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(79,111,174,0.12)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-bright)',
                }}
              >
                <GraduationCap size={15} />
              </div>
              <span style={{ fontSize: '0.78rem', fontWeight: 'var(--font-bold)', letterSpacing: '0.12em', color: 'var(--text)' }}>
                EDUCACIÓN ACADÉMICA
              </span>
              <div style={{ width: '6px', height: '6px', borderRadius: 'var(--radius-full)', background: 'var(--accent-bright)', marginLeft: '0.25rem' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {education.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  style={{
                    display: 'flex',
                    gap: '0.875rem',
                    padding: '0.875rem 0',
                    borderBottom: i < education.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                    alignItems: 'flex-start',
                    position: 'relative',
                  }}
                >
                  {/* Timeline dot */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '-1.25rem',
                      top: '1.25rem',
                      width: '6px',
                      height: '6px',
                      borderRadius: 'var(--radius-full)',
                      background: 'var(--accent)',
                    }}
                  />

                  {/* Icon */}
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(79,111,174,0.08)',
                      border: '1px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: item.mono ? '0.6rem' : '1.1rem',
                      fontWeight: item.mono ? 'var(--font-black)' : 'var(--font-regular)',
                      fontFamily: item.mono ? 'var(--font-mono)' : undefined,
                      color: item.mono ? 'var(--accent-bright)' : undefined,
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.15rem' }}>
                      <span style={{ fontSize: '0.82rem', fontWeight: 'var(--font-bold)', color: 'var(--text)', lineHeight: 1.3 }}>
                        {item.title}
                      </span>
                      <span style={{ fontSize: '0.6rem', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)', flexShrink: 0 }}>
                        📅 {item.year}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--accent-bright)', fontWeight: 'var(--font-medium)', marginBottom: '0.25rem' }}>
                      {item.institution}
                    </div>
                    <p style={{ fontSize: '0.72rem', color: 'var(--text-soft)', lineHeight: 1.5 }}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Certificaciones */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem',
                marginBottom: '1.25rem',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid var(--border)',
              }}
            >
              <div
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(79,111,174,0.12)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-bright)',
                }}
              >
                <Award size={15} />
              </div>
              <span style={{ fontSize: '0.78rem', fontWeight: 'var(--font-bold)', letterSpacing: '0.12em', color: 'var(--text)' }}>
                CERTIFICACIONES
              </span>
              <div style={{ width: '6px', height: '6px', borderRadius: 'var(--radius-full)', background: 'var(--accent-bright)', marginLeft: '0.25rem' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {certifications.map((cert, i) => (
                <Card
                  key={i}
                  padding="sm"
                  radius="md"
                  glow="md"
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}
                >
                  {/* Tech icon */}
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-sm)',
                      background: cert.iconBg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      overflow: 'hidden',
                    }}
                  >
                    {cert.img
                      ? <Image src={cert.img} alt={cert.title} width={28} height={28} style={{ objectFit: 'contain' }} />
                      : <span style={{ fontSize: '1.3rem' }}>{cert.icon}</span>
                    }
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <span style={{ fontSize: '0.82rem', fontWeight: 'var(--font-bold)', color: 'var(--text)', lineHeight: 1.2 }}>
                        {cert.title}
                      </span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', flexShrink: 0 }}>
                        <span style={{ fontSize: '0.58rem', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>
                          {cert.year}
                        </span>
                        <div
                          style={{
                            width: '22px',
                            height: '22px',
                            borderRadius: '0.375rem',
                            background: 'rgba(79,111,174,0.12)',
                            border: '1px solid var(--border)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--accent-bright)',
                          }}
                        >
                          <ExternalLink size={11} />
                        </div>
                      </div>
                    </div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--accent-bright)', fontWeight: 'var(--font-medium)', marginTop: '0.1rem', marginBottom: '0.2rem' }}>
                      {cert.platform}
                    </div>
                    <p style={{ fontSize: '0.7rem', color: 'var(--text-soft)', lineHeight: 1.4 }}>
                      {cert.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom strip: quote + stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="formation-bottom"
          style={{
            alignItems: 'center',
            padding: '1.25rem 1.75rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
          }}
        >
          {/* Quote */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <span style={{ fontSize: '2.5rem', color: 'var(--accent)', lineHeight: 1, flexShrink: 0, marginTop: '-0.25rem' }}>
              &ldquo;
            </span>
            <div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text)', lineHeight: 1.6, fontStyle: 'italic' }}>
                {quote}
              </p>
              <p style={{ fontSize: '0.72rem', color: 'var(--accent-bright)', fontWeight: 'var(--font-medium)', marginTop: '0.3rem' }}>
                {quoteAuthor}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="formation-bottom-stats" style={{ display: 'flex', gap: '2rem', flexShrink: 0 }}>
            {bottomStats.map(({ icon: Icon, value, label }) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem', textAlign: 'center' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(79,111,174,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-bright)',
                  }}
                >
                  <Icon size={16} />
                </div>
                <span style={{ fontSize: '1rem', fontWeight: 'var(--font-extrabold)', color: 'var(--text)', lineHeight: 1 }}>{value}</span>
                <span style={{ fontSize: '0.6rem', color: 'var(--text-soft)', whiteSpace: 'pre-line', lineHeight: 1.3 }}>{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </Section>
  );
}
