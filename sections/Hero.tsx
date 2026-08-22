'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Download, ChevronDown, Briefcase, Star } from 'lucide-react';
import dynamic from 'next/dynamic';
import Button from '@/components/Button';

const HeroGlobe = dynamic(() => import('@/components/HeroGlobe'), { ssr: false });

interface Props {
  onNavigate: (id: string) => void;
}

const techStack = [
  { label: 'Python',     bg: '#1e3a5f', img: '/python.png' },
  { label: 'Django',     bg: '#092e20', img: '/django.png' },
  { label: 'DRF',        bg: '#7f1d1d', img: null, text: 'DRF' },
  { label: 'React',      bg: '#0c2340', img: '/React.png' },
  { label: 'Next.js',    bg: '#ffffff', img: '/Next.js.png' },
  { label: 'PostgreSQL', bg: '#0d2137', img: '/postgresql.png' },
  { label: 'Git',        bg: '#2d0a00', img: '/git.png' },
];

export default function Hero({ onNavigate }: Props) {
  return (
    <section
      id="inicio"
      className="hero-section"
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'var(--bg)',
      }}
    >
      {/* ── Left text column ── */}
      <div className="hero-text-col">
        {/* ¡HOLA! */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          style={{ fontSize: '0.8rem', fontWeight: 'var(--font-bold)', letterSpacing: '0.18em', color: 'var(--accent-bright)' }}
        >
        </motion.p>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          style={{
            fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
            fontWeight: 'var(--font-black)',
            lineHeight: 1.0,
            letterSpacing: '-0.03em',
            margin: 0,
          }}
        >
          WIRJIN
          <br />
          <span className="glow-text">SÁNCHEZ</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.28 }}
          style={{
            fontSize: '0.72rem',
            fontWeight: 'var(--font-bold)',
            letterSpacing: '0.15em',
            color: 'var(--text-soft)',
            textTransform: 'uppercase',
            lineHeight: 1.5,
          }}
        >
          Analista de Sistemas
          <br />&amp; Desarrollador Backend & Frontend
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.38 }}
          style={{ fontSize: '0.865rem', color: 'var(--text-soft)', lineHeight: 1.75, maxWidth: '380px' }}
        >
          Como desarrollador de software, me especializo en crear aplicaciones web escalables 
          y de alto rendimiento. Combino tecnologías como{' '}
          <span style={{ color: 'var(--accent-bright)', fontWeight: 'var(--font-medium)' }}>Python</span>,{' '}
          <span style={{ color: 'var(--accent-bright)', fontWeight: 'var(--font-medium)' }}>Django</span>,{' '}
          <span style={{ color: 'var(--accent-bright)', fontWeight: 'var(--font-medium)' }}>React</span>,{' '}
          <span style={{ color: 'var(--accent-bright)', fontWeight: 'var(--font-medium)' }}>Next.js</span>,{' '}
          <span style={{ color: 'var(--accent-bright)', fontWeight: 'var(--font-medium)' }}>Tailwind</span>,{' '}
          para desarrollar soluciones robustas, modernas y centradas en el usuario.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.48 }}
          style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' }}
        >
          <Button variant="primary" onClick={() => onNavigate('proyectos')}>
            Ver mis proyectos <ArrowRight size={15} />
          </Button>

          <Button variant="ghost" href="/Wirjin Sanchez (1).pdf" download>
            Descargar CV <Download size={15} />
          </Button>
        </motion.div>

        {/* ── Mobile-only: available badge ── */}
        <div className="hero-mobile-available">
          <div style={{
            width: '7px', height: '7px', borderRadius: 'var(--radius-full)',
            background: 'var(--success)', boxShadow: '0 0 6px var(--success)',
            animation: 'pulseDot 2s ease-in-out infinite', flexShrink: 0,
          }} />
          <span style={{ fontSize: '0.72rem', fontWeight: 'var(--font-medium)', color: 'var(--success)' }}>Disponible para proyectos</span>
          <span style={{ fontSize: '0.68rem', color: 'var(--text-soft)' }}>· nuevos desafíos</span>
        </div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 'var(--font-bold)', color: 'var(--accent-bright)' }}>01</span>
          <div style={{ width: '48px', height: '1px', background: 'linear-gradient(90deg, var(--accent), transparent)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-soft)' }}>06</span>
        </motion.div>

        {/* Scroll indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-soft)' }}>
          <div style={{ animation: 'scrollBounce 1.5s ease-in-out infinite' }}>
            <ChevronDown size={15} />
          </div>
          <span style={{ fontSize: '0.67rem', letterSpacing: '0.1em' }}>Desliza para explorar</span>
        </div>

        {/* ── Mobile-only: stats row ── */}
        <div className="hero-mobile-stats-row">
          {[
            { icon: <Briefcase size={13} />, value: '4+', label: 'Años exp.' },
            { icon: <Star size={13} />, value: '2+', label: 'Proyectos' },
            { icon: <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', fontWeight: 'var(--font-black)' }}>{'</>'}</span>, value: '100%', label: 'Comprometido' },
          ].map((s) => (
            <div key={s.label} className="hero-mobile-stat">
              <div style={{
                width: '26px', height: '26px', borderRadius: '0.4rem',
                background: 'var(--accent-glow)', border: '1px solid rgba(102,132,196,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--accent-bright)', flexShrink: 0,
              }}>{s.icon}</div>
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 'var(--font-extrabold)', color: '#fff', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: '0.56rem', color: 'rgba(255,255,255,0.65)', marginTop: '0.1rem' }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech stack strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          style={{ marginTop: '0.5rem' }}
        >
          <p style={{ fontSize: '0.6rem', fontWeight: 'var(--font-bold)', letterSpacing: '0.18em', color: 'var(--text-soft)', marginBottom: '0.625rem' }}>
            TECNOLOGÍAS
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {techStack.map((t) => (
              <div
                key={t.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '44px',
                  height: '44px',
                  borderRadius: 'var(--radius-sm)',
                  background: t.bg,
                  border: '1px solid rgba(255,255,255,0.08)',
                  cursor: 'default',
                }}
                title={t.label}
              >
                {t.img
                  ? <Image src={t.img} alt={t.label} width={26} height={26} style={{ objectFit: 'contain' }} />
                  : <span style={{ fontSize: '0.55rem', fontWeight: 'var(--font-black)', fontFamily: 'var(--font-mono)', color: '#f87171' }}>{t.text}</span>
                }
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Mobile-only: globe + stats ── */}
      <div className="hero-mobile-block" style={{ display: 'none' }}>
        {/* Globe */}
        <div className="hero-mobile-globe-wrap">
          <HeroGlobe />
        </div>
        {/* Stats row */}
        <div className="hero-mobile-stats">
          {[
            { icon: <Briefcase size={14} />, value: '4+', label: 'Años de experiencia' },
            { icon: <Star size={14} />, value: '2+', label: 'Proyectos completados' },
            { icon: <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: 'var(--font-black)' }}>{'</>'}</span>, value: '100%', label: 'Comprometido' },
          ].map((s) => (
            <div key={s.label} className="hero-mobile-stat-card">
              <div
                style={{
                  width: '28px', height: '28px', borderRadius: '0.4rem',
                  background: 'var(--accent-glow)', border: '1px solid rgba(102,132,196,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--accent-bright)', flexShrink: 0,
                }}
              >
                {s.icon}
              </div>
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 'var(--font-extrabold)', color: 'var(--text)', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: '0.58rem', color: 'var(--text-soft)', marginTop: '0.1rem' }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right: photo + floating elements ── */}
      <div className="hero-right-panel">

        {/* ── Code card (top-center) ── */}
        <motion.div
          className="hero-desktop-only"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          style={{
            position: 'absolute',
            top: '8%',
            left: '12%',
            zIndex: 4,
            background: 'rgba(10,10,30,0.88)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 'var(--radius-md)',
            padding: '0.875rem 1rem',
            backdropFilter: 'blur(14px)',
            boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
            fontFamily: 'var(--font-mono)',
            minWidth: '220px',
          }}
        >
          {/* Window dots */}
          <div style={{ display: 'flex', gap: '0.35rem', marginBottom: '0.625rem' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: 'var(--radius-full)', background: 'var(--danger)' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: 'var(--radius-full)', background: 'var(--warning)' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: 'var(--radius-full)', background: 'var(--success)' }} />
          </div>
          <div style={{ fontSize: '0.62rem', lineHeight: 1.7 }}>
            <div>
              <span style={{ color: 'var(--accent-bright)' }}>def </span>
              <span style={{ color: 'rgba(255,255,255,0.65)' }}>construir_sistemas</span>
              <span style={{ color: 'rgba(255,255,255,0.5)' }}>():</span>
            </div>
            <div style={{ paddingLeft: '1rem' }}>
              <span style={{ color: '#7dd3fc' }}>soluciones </span>
              <span style={{ color: 'rgba(255,255,255,0.5)' }}>= [</span>
            </div>
            {["'Código'", "'Diseño'", "'Rendimiento'", "'Escalabilidad'", "'Impacto'"].map((s) => (
              <div key={s} style={{ paddingLeft: '2rem', color: '#86efac' }}>{s},</div>
            ))}
            <div style={{ paddingLeft: '1rem', color: 'rgba(255,255,255,0.5)' }}>]</div>
            <div style={{ paddingLeft: '1rem' }}>
              <span style={{ color: 'var(--accent-bright)' }}>return </span>
              <span style={{ color: '#7dd3fc' }}>soluciones</span>
            </div>
            <div style={{ color: 'rgba(255,255,255,0.3)', marginTop: '0.2rem' }}># Soluciones que generan impacto</div>
          </div>
        </motion.div>

        {/* ── </> box top-right ── */}
        <motion.div
          className="hero-desktop-only"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          style={{
            position: 'absolute',
            top: '7%',
            right: '4%',
            zIndex: 4,
            width: '52px',
            height: '52px',
            borderRadius: 'var(--radius-md)',
            background: 'rgba(10,10,30,0.85)',
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            fontWeight: 'var(--font-bold)',
            color: 'var(--accent-bright)',
          }}
        >
          {'</>'}
        </motion.div>

        {/* ── Available badge ── */}
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          style={{
            position: 'absolute',
            top: '48%',
            left: '4%',
            zIndex: 4,
            display: 'flex',
            alignItems: 'center',
            gap: '0.625rem',
            padding: '0.625rem 0.875rem',
            background: 'rgba(10,10,30,0.88)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 'var(--radius-md)',
            backdropFilter: 'blur(14px)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
          }}
        >
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(79,111,174,0.2)',
              border: '1px solid rgba(102,132,196,0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1rem',
            }}
          >
            🚀
          </div>
          <div>
            <div style={{ fontSize: '0.7rem', fontWeight: 'var(--font-bold)', color: '#fff' }}>Disponible para</div>
            <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.65)' }}>proyectos</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.15rem' }}>
              <div
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--success)',
                  boxShadow: '0 0 6px var(--success)',
                  animation: 'pulseDot 2s ease-in-out infinite',
                }}
              />
              <span style={{ fontSize: '0.58rem', color: 'var(--success)', fontWeight: 'var(--font-medium)' }}>nuevos desafíos</span>
            </div>
          </div>
        </motion.div>

        {/* ── Large </> center-bottom ── */}
        <motion.div
          className="hero-desktop-only"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          style={{
            position: 'absolute',
            bottom: '12%',
            left: '38%',
            zIndex: 4,
            fontFamily: 'var(--font-mono)',
            fontSize: '3.5rem',
            fontWeight: 'var(--font-black)',
            color: 'transparent',
            WebkitTextStroke: '2px rgba(79,111,174,0.6)',
            letterSpacing: '-0.04em',
            textShadow: '0 0 60px rgba(79,111,174,0.2)',
            userSelect: 'none',
          }}
        >
          {'</>'}
        </motion.div>

        {/* ── Stats column (right) ── */}
        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.75, duration: 0.55 }}
          style={{
            position: 'absolute',
            right: '3%',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 4,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.625rem',
          }}
        >
          {[
            { icon: <Briefcase size={16} />, value: '4+', label: 'Años de experiencia' },
            { icon: <Star size={16} />, value: '2+', label: 'Proyectos completados' },
            { icon: <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 'var(--font-black)' }}>{'</>'}</span>, value: '100%', label: 'Comprometido' },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem',
                padding: '0.625rem 0.875rem',
                background: 'rgba(10,10,30,0.88)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 'var(--radius-md)',
                backdropFilter: 'blur(14px)',
                minWidth: '175px',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--accent-glow)',
                  border: '1px solid rgba(102,132,196,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-bright)',
                  flexShrink: 0,
                }}
              >
                {s.icon}
              </div>
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: 'var(--font-extrabold)', color: '#fff', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.65)', marginTop: '0.15rem' }}>{s.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── Globe (main visual, centered) ── */}
        <div
          className="hero-globe-wrap"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '480px',
            height: '480px',
            zIndex: 1,
          }}
        >
          <HeroGlobe />
        </div>
      </div>

      {/* BG radial glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '20%',
          left: '38%',
          width: '500px',
          height: '500px',
          borderRadius: 'var(--radius-full)',
          background: 'radial-gradient(circle, rgba(79,111,174,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
    </section>
  );
}
