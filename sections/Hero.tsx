'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Download, ChevronDown, Briefcase, Star } from 'lucide-react';
import dynamic from 'next/dynamic';

const HeroGlobe = dynamic(() => import('@/components/HeroGlobe'), { ssr: false });

interface Props {
  onNavigate: (id: string) => void;
}

const techStack = [
  { label: 'Python',     bg: '#1e3a5f', img: '/python.png' },
  { label: 'Django',     bg: '#092e20', img: '/django.png' },
  { label: 'DRF',        bg: '#7f1d1d', img: null, text: 'DRF' },
  { label: 'React',      bg: '#0c2340', img: '/React.png' },
  { label: 'Next.js',    bg: '#111111', img: '/Next.js.png' },
  { label: 'PostgreSQL', bg: '#0d2137', img: '/postgresql.png' },
  { label: 'Git',        bg: '#2d0a00', img: '/git.png' },
];

export default function Hero({ onNavigate }: Props) {
  return (
    <section
      id="inicio"
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'var(--bg)',
      }}
    >
      {/* ── Left text column ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          width: '42%',
          minWidth: '340px',
          padding: '5rem 0 4rem 2.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.1rem',
        }}
      >
        {/* ¡HOLA! */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.18em', color: 'var(--accent-bright)' }}
        >
          ¡HOLA! 👋
        </motion.p>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          style={{
            fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
            fontWeight: 900,
            lineHeight: 1.0,
            letterSpacing: '-0.03em',
            margin: 0,
          }}
        >
          SOY WIRJIN
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
            fontWeight: 700,
            letterSpacing: '0.15em',
            color: 'var(--text-soft)',
            textTransform: 'uppercase',
            lineHeight: 1.5,
          }}
        >
          Analista de Sistemas
          <br />&amp; Desarrollador Backend
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.38 }}
          style={{ fontSize: '0.865rem', color: 'var(--text-soft)', lineHeight: 1.75, maxWidth: '380px' }}
        >
          Me especializo en desarrollar aplicaciones web eficientes y escalables
          utilizando{' '}
          <span style={{ color: 'var(--accent-bright)', fontWeight: 600 }}>Python</span>,{' '}
          <span style={{ color: 'var(--accent-bright)', fontWeight: 600 }}>Django</span>,{' '}
          <span style={{ color: 'var(--accent-bright)', fontWeight: 600 }}>React</span>{' '}
          y tecnologías modernas.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.48 }}
          style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' }}
        >
          <button
            onClick={() => onNavigate('proyectos')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.72rem 1.5rem',
              background: 'linear-gradient(135deg, var(--accent), var(--accent-bright))',
              color: '#fff',
              border: 'none',
              borderRadius: '0.5rem',
              fontSize: '0.82rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'box-shadow 0.2s, transform 0.2s',
              boxShadow: '0 0 20px rgba(124,58,237,0.35)',
            }}
            onMouseEnter={(e) => {
              const b = e.currentTarget as HTMLButtonElement;
              b.style.boxShadow = '0 0 36px rgba(124,58,237,0.6)';
              b.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              const b = e.currentTarget as HTMLButtonElement;
              b.style.boxShadow = '0 0 20px rgba(124,58,237,0.35)';
              b.style.transform = 'none';
            }}
          >
            Ver mis proyectos <ArrowRight size={15} />
          </button>

          <a
            href="/Wirjin Sanchez (1).pdf"
            download
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.72rem 1.5rem',
              background: 'rgba(255,255,255,0.05)',
              color: 'var(--text)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '0.5rem',
              fontSize: '0.82rem',
              fontWeight: 700,
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'border-color 0.2s, background 0.2s',
            }}
            onMouseEnter={(e) => {
              const a = e.currentTarget as HTMLAnchorElement;
              a.style.borderColor = 'var(--accent)';
              a.style.background = 'rgba(124,58,237,0.1)';
            }}
            onMouseLeave={(e) => {
              const a = e.currentTarget as HTMLAnchorElement;
              a.style.borderColor = 'rgba(255,255,255,0.15)';
              a.style.background = 'rgba(255,255,255,0.05)';
            }}
          >
            Descargar CV <Download size={15} />
          </a>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 700, color: 'var(--accent-bright)' }}>01</span>
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

        {/* Tech stack strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          style={{ marginTop: '0.5rem' }}
        >
          <p style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', color: 'var(--text-soft)', marginBottom: '0.625rem' }}>
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
                  borderRadius: '0.625rem',
                  background: t.bg,
                  border: '1px solid rgba(255,255,255,0.08)',
                  cursor: 'default',
                }}
                title={t.label}
              >
                {t.img
                  ? <Image src={t.img} alt={t.label} width={26} height={26} style={{ objectFit: 'contain' }} />
                  : <span style={{ fontSize: '0.55rem', fontWeight: 900, fontFamily: 'var(--font-mono)', color: '#f87171' }}>{t.text}</span>
                }
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Right: photo + floating elements ── */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '65%',
          height: '100%',
          zIndex: 1,
        }}
      >

        {/* ── Code card (top-center) ── */}
        <motion.div
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
            borderRadius: '0.875rem',
            padding: '0.875rem 1rem',
            backdropFilter: 'blur(14px)',
            boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
            fontFamily: 'var(--font-mono)',
            minWidth: '220px',
          }}
        >
          {/* Window dots */}
          <div style={{ display: 'flex', gap: '0.35rem', marginBottom: '0.625rem' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }} />
          </div>
          <div style={{ fontSize: '0.62rem', lineHeight: 1.7 }}>
            <div>
              <span style={{ color: '#c084fc' }}>def </span>
              <span style={{ color: '#f0abfc' }}>construir_sistemas</span>
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
              <span style={{ color: '#c084fc' }}>return </span>
              <span style={{ color: '#7dd3fc' }}>soluciones</span>
            </div>
            <div style={{ color: 'rgba(255,255,255,0.3)', marginTop: '0.2rem' }}># Soluciones que generan impacto</div>
          </div>
        </motion.div>

        {/* ── </> box top-right ── */}
        <motion.div
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
            borderRadius: '0.75rem',
            background: 'rgba(10,10,30,0.85)',
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            fontWeight: 700,
            color: 'var(--accent-bright)',
          }}
        >
          {'</>'}
        </motion.div>

        {/* ── Available badge ── */}
        <motion.div
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
            borderRadius: '0.875rem',
            backdropFilter: 'blur(14px)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
          }}
        >
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              background: 'rgba(124,58,237,0.25)',
              border: '1px solid rgba(168,85,247,0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1rem',
            }}
          >
            🚀
          </div>
          <div>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text)' }}>Disponible para</div>
            <div style={{ fontSize: '0.65rem', color: 'var(--text-soft)' }}>proyectos</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.15rem' }}>
              <div
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#22c55e',
                  boxShadow: '0 0 6px #22c55e',
                  animation: 'pulseDot 2s ease-in-out infinite',
                }}
              />
              <span style={{ fontSize: '0.58rem', color: '#22c55e', fontWeight: 600 }}>nuevos desafíos</span>
            </div>
          </div>
        </motion.div>

        {/* ── Large </> center-bottom ── */}
        <motion.div
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
            fontWeight: 900,
            color: 'transparent',
            WebkitTextStroke: '2px rgba(124,58,237,0.7)',
            letterSpacing: '-0.04em',
            textShadow: '0 0 60px rgba(124,58,237,0.3)',
            userSelect: 'none',
          }}
        >
          {'</>'}
        </motion.div>

        {/* ── Stats column (right) ── */}
        <motion.div
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
            { icon: <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 900 }}>{'</>'}</span>, value: '100%', label: 'Comprometido' },
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
                borderRadius: '0.75rem',
                backdropFilter: 'blur(14px)',
                minWidth: '175px',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '0.5rem',
                  background: 'rgba(124,58,237,0.2)',
                  border: '1px solid rgba(168,85,247,0.25)',
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
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text)', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: '0.62rem', color: 'var(--text-soft)', marginTop: '0.15rem' }}>{s.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── Globe (main visual, centered) ── */}
        <div
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
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
    </section>
  );
}
