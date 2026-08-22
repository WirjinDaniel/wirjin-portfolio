'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Monitor, Database, Star, Brain, BarChart2, Lightbulb, Clock, Users, Heart } from 'lucide-react';
import Section from '@/components/Section';
import Card from '@/components/Card';

/* ─── Circular progress SVG ─── */
function CircleProgress({ value, size = 52 }: { value: number; size?: number }) {
  const r = (size - 6) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (value / 100) * circ;
  return (
    <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth={4} />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="url(#pg)"
          strokeWidth={4}
          strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        />
        <defs>
          <linearGradient id="pg" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--accent)" />
            <stop offset="100%" stopColor="var(--accent-bright)" />
          </linearGradient>
        </defs>
      </svg>
      <span style={{
        position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '0.6rem', fontWeight: 'var(--font-extrabold)', color: 'var(--accent-bright)', fontFamily: 'var(--font-mono)',
      }}>
        {value}%
      </span>
    </div>
  );
}

/* ─── Bottom progress bar ─── */
function BarProgress({ value, delay = 0 }: { value: number; delay?: number }) {
  return (
    <div style={{ height: '3px', background: 'rgba(255,255,255,0.07)', borderRadius: 'var(--radius-full)', overflow: 'hidden', marginTop: '0.75rem' }}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay, ease: 'easeOut' }}
        style={{ height: '100%', background: 'linear-gradient(90deg, var(--accent), var(--accent-bright))', borderRadius: 'var(--radius-full)' }}
      />
    </div>
  );
}

/* ─── Data ─── */
const backend = [
  { img: '/python.png',  iconBg: '#1a3a5c', title: 'Python',                subtitle: 'Backend Development', level: 82, desc: 'Desarrollo de aplicaciones, scripts y automatización.' },
  { img: '/django.png',  iconBg: '#092e20', title: 'Django',                subtitle: 'Web Framework',       level: 82, desc: 'Desarrollo de aplicaciones web robustas y escalables.' },
  { img: null, text: 'DRF', iconBg: '#5c1010', title: 'Django REST Framework', subtitle: 'APIs & Serializers',  level: 72, desc: 'Construcción de APIs RESTful seguras y eficientes.' },
];

const frontend = [
  { img: '/React.png',   iconBg: '#0d2a3a', title: 'React',   subtitle: 'UI Libraries',   level: 72, desc: 'Creación de interfaces dinámicas y componentes reutilizables.' },
  { img: '/Next.js.png', iconBg: '#ffffff', title: 'Next.js', subtitle: 'React Framework', level: 72, desc: 'Aplicaciones web modernas con renderizado optimizado.' },
];

const databases = [
  { img: '/sql-server.png', title: 'SQL Server',  subtitle: 'Base de datos relacional', level: 60 },
  { img: '/power-bi.png',   title: 'Power BI',    subtitle: 'Análisis de datos',        level: 65 },
  { img: null, text: 'C+R', title: 'Celery+Redis',subtitle: 'Tareas asíncronas',        level: 40 },
  { img: null, text: 'AD',  title: 'LDAP / AD',   subtitle: 'Autenticación corp.',       level: 55 },
];

const aptitudes = [
  { icon: Brain, label: 'Razonamiento Lógico', desc: 'Análisis y toma de decisiones basadas en la lógica.' },
  { icon: BarChart2, label: 'Capacidad Analítica', desc: 'Interpretación de datos y análisis de información.' },
  { icon: Lightbulb, label: 'Resolución de Problemas', desc: 'Identificación de problemas y soluciones eficientes.' },
  { icon: Clock, label: 'Gestión del Tiempo', desc: 'Organización, planificación y cumplimiento de objetivos.' },
  { icon: Users, label: 'Trabajo en Equipo', desc: 'Comunicación efectiva y colaboración constante.' },
  { icon: Heart, label: 'Empatía', desc: 'Escucha activa y comprensión del entorno.' },
];

/* ─── Big skill card (backend/frontend) ─── */
function BigCard({ img, text, iconBg, title, subtitle, level, desc, delay = 0 }: typeof backend[number] & { delay?: number }) {
  return (
    <Card
      padding="lg"
      radius="lg"
      glow="md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -4 }}
      style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <div
            style={{
              width: '48px', height: '48px', borderRadius: 'var(--radius-md)',
              background: iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, overflow: 'hidden',
            }}
          >
            {img
              ? <Image src={img} alt={title} width={30} height={30} style={{ objectFit: 'contain' }} />
              : <span style={{ fontSize: '0.6rem', fontWeight: 'var(--font-black)', fontFamily: 'var(--font-mono)', color: '#f87171' }}>{text}</span>
            }
          </div>
          <div>
            <div style={{ fontSize: '0.875rem', fontWeight: 'var(--font-bold)', color: 'var(--text)' }}>{title}</div>
            <div style={{ fontSize: '0.68rem', color: 'var(--accent-bright)', fontWeight: 'var(--font-medium)', marginTop: '0.1rem' }}>{subtitle}</div>
          </div>
        </div>
        <CircleProgress value={level} />
      </div>
      <p style={{ fontSize: '0.72rem', color: 'var(--text-soft)', lineHeight: 1.55 }}>{desc}</p>
      <BarProgress value={level} delay={delay + 0.2} />
    </Card>
  );
}

/* ─── Small DB card ─── */
function SmallCard({ img, text, title, subtitle, level, delay = 0 }: typeof databases[number] & { delay?: number }) {
  return (
    <Card
      padding="md"
      radius="md"
      glow="md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay }}
      whileHover={{ y: -3 }}
      style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', flex: 1 }}
    >
      <div style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {img
          ? <Image src={img} alt={title} width={28} height={28} style={{ objectFit: 'contain' }} />
          : <span style={{ fontSize: '0.6rem', fontWeight: 'var(--font-black)', fontFamily: 'var(--font-mono)', color: 'var(--accent-bright)' }}>{text}</span>
        }
      </div>
      <div style={{ fontSize: '0.78rem', fontWeight: 'var(--font-bold)', color: 'var(--text)', lineHeight: 1.2 }}>{title}</div>
      <div style={{ fontSize: '0.62rem', color: 'var(--text-soft)', lineHeight: 1.3 }}>{subtitle}</div>
      <div style={{ fontSize: '0.62rem', color: 'var(--accent-bright)', fontWeight: 'var(--font-bold)', fontFamily: 'var(--font-mono)' }}>{level}%</div>
      <BarProgress value={level} delay={delay + 0.15} />
    </Card>
  );
}

/* ─── Aptitude card ─── */
function AptCard({ icon: Icon, label, desc, delay = 0 }: typeof aptitudes[number] & { delay?: number }) {
  return (
    <Card
      padding="md"
      radius="md"
      glow="md"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay }}
      whileHover={{ y: -3 }}
      style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}
    >
      <div
        style={{
          width: '36px', height: '36px', borderRadius: 'var(--radius-sm)',
          background: 'rgba(79,111,174,0.1)', border: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--accent-bright)',
        }}
      >
        <Icon size={16} />
      </div>
      <div style={{ fontSize: '0.8rem', fontWeight: 'var(--font-bold)', color: 'var(--text)', lineHeight: 1.2 }}>{label}</div>
      <p style={{ fontSize: '0.68rem', color: 'var(--text-soft)', lineHeight: 1.5 }}>{desc}</p>
    </Card>
  );
}

/* ─── Category header ─── */
import type { LucideProps } from 'lucide-react';

function CatHeader({ icon: Icon, label }: { icon: React.FC<LucideProps>; label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1rem' }}>
      <div
        style={{
          width: '32px', height: '32px', borderRadius: 'var(--radius-sm)',
          background: 'rgba(79,111,174,0.12)', border: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--accent-bright)',
        }}
      >
        <Icon size={15} />
      </div>
      <span style={{ fontSize: '0.78rem', fontWeight: 'var(--font-extrabold)', letterSpacing: '0.1em', color: 'var(--text)' }}>{label}</span>
    </div>
  );
}

/* ─── Main component ─── */
export default function Skills() {
  return (
    <Section id="habilidades">
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

        {/* Header row */}
        <div className="skills-header-grid">
          {/* Left: title */}
          <div>
            <div style={{ fontSize: '0.65rem', fontWeight: 'var(--font-bold)', letterSpacing: '0.2em', color: 'var(--accent-bright)', marginBottom: '0.5rem' }}>
              TECNOLOGÍAS
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 'var(--font-black)', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
              HABILIDADES
              <br />
              <span className="glow-text">& TECNOLOGÍAS</span>
            </h2>
            <div style={{ width: '40px', height: '3px', background: 'linear-gradient(90deg, var(--accent), var(--accent-bright))', borderRadius: '2px', margin: '0.75rem 0 1rem' }} />
            <p style={{ fontSize: '0.85rem', color: 'var(--text-soft)', lineHeight: 1.75, maxWidth: '380px' }}>
              Tecnologías y herramientas que utilizo para diseñar, desarrollar
              y mantener soluciones modernas, eficientes y escalables.
            </p>
          </div>

          {/* Right: code illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ position: 'relative', height: '200px' }}
          >
            {/* Laptop / code card */}
            <div
              style={{
                position: 'absolute', top: 0, left: '10%', right: 0,
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)', padding: '1rem',
                fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              }}
            >
              <div style={{ color: '#94a3b8', marginBottom: '0.3rem' }}>{'const developer = {'}</div>
              <div style={{ paddingLeft: '1rem' }}>
                <div><span style={{ color: '#86efac' }}>skills</span><span style={{ color: '#94a3b8' }}>: [</span><span style={{ color: '#fde68a' }}>&quot;Python&quot;, &quot;Django&quot;,</span></div>
                <div style={{ paddingLeft: '1rem' }}><span style={{ color: '#fde68a' }}>&quot;React&quot;, &quot;SQL&quot;</span><span style={{ color: '#94a3b8' }}>],</span></div>
                <div><span style={{ color: '#86efac' }}>passion</span><span style={{ color: '#94a3b8' }}>: </span><span style={{ color: '#fde68a' }}>&quot;Soluciones que generan impacto&quot;</span></div>
              </div>
              <div style={{ color: '#94a3b8' }}>{'}'}</div>
            </div>

            {/* Stat cards */}
            <div
              style={{
                position: 'absolute', top: '0.5rem', right: '-0.5rem',
                display: 'flex', flexDirection: 'column', gap: '0.5rem',
              }}
            >
              {[{ label: 'Experiencia', value: '+2 Años' }, { label: 'Proyectos', value: '+2' }].map((s) => (
                <div
                  key={s.label}
                  style={{
                    background: 'rgba(79,111,174,0.12)', border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-sm)', padding: '0.5rem 0.875rem',
                    fontSize: '0.65rem', color: 'var(--text-soft)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <div>{s.label}</div>
                  <div style={{ fontWeight: 'var(--font-extrabold)', color: 'var(--accent-bright)', fontSize: '0.8rem' }}>{s.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* BACKEND & APIS */}
        <div>
          <CatHeader icon={Monitor} label="BACKEND & APIS" />
          <div className="flex-wrap-mobile" style={{ gap: '1rem' }}>
            {backend.map((s, i) => <BigCard key={s.title} {...s} delay={i * 0.1} />)}
          </div>
        </div>

        {/* FRONTEND + BASES DE DATOS */}
        <div className="skills-bottom-grid">
          {/* Frontend */}
          <div>
            <CatHeader icon={Monitor} label="FRONTEND" />
            <div className="flex-wrap-mobile" style={{ gap: '1rem' }}>
              {frontend.map((s, i) => <BigCard key={s.title} {...s} delay={i * 0.1} />)}
            </div>
          </div>

          {/* Bases de datos */}
          <div>
            <CatHeader icon={Database} label="BASES DE DATOS & HERRAMIENTAS" />
            <div className="flex-wrap-mobile" style={{ gap: '0.75rem' }}>
              {databases.map((s, i) => <SmallCard key={s.title} {...s} delay={i * 0.08} />)}
            </div>
          </div>
        </div>

        {/* APTITUDES PROFESIONALES */}
        <div>
          <CatHeader icon={Star} label="APTITUDES PROFESIONALES" />
          <div className="flex-wrap-mobile" style={{ gap: '0.875rem' }}>
            {aptitudes.map((a, i) => <AptCard key={a.label} {...a} delay={i * 0.07} />)}
          </div>
        </div>

      </div>
    </Section>
  );
}
