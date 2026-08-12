'use client';

import dynamic from 'next/dynamic';
import { motion, useReducedMotion } from 'framer-motion';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { useCountUp } from '@/hooks/useCountUp';
import { useHeroParallax } from '@/hooks/useHeroParallax';
import { heroStats, roleText } from '@/lib/data';
import HeroName from './HeroName';

const HeroCanvas = dynamic(() => import('./HeroCanvas'), { ssr: false });

const riseUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1.0, ease: 'easeOut' as const } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

function StatItem({ count, label }: { count: number; label: string }) {
  const { value, ref } = useCountUp(count);
  return (
    <div className="stat" ref={ref as React.Ref<HTMLDivElement>}>
      <div className="num">{value}+</div>
      <div className="label">{label}</div>
    </div>
  );
}

export default function Hero() {
  const { displayed, done } = useTypingEffect(roleText);
  const shouldReduceMotion = useReducedMotion();
  const { heroRef, photoRef, textRef } = useHeroParallax();

  return (
    <header
      ref={heroRef}
      className="hero"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* 3D canvas — absolute behind content */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <HeroCanvas />
      </motion.div>

      {/* Content layer */}
      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-layout">
          {/* Text column — fades on scroll via GSAP */}
          <motion.div
            ref={textRef}
            className="hero-text"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.13, delayChildren: 0.08 } },
            }}
          >
            <motion.span className="pill" variants={riseUp}>
              ◉ disponible para nuevos proyectos
            </motion.span>
            <motion.div variants={riseUp}>
              <HeroName bare />
            </motion.div>
            <motion.p className="role" variants={riseUp}>
              {displayed}
              <span
                className="cursor"
                style={{
                  opacity: done ? 0 : 1,
                  transition: 'opacity 0.4s ease',
                }}
              />
            </motion.p>
            <motion.p className="tagline" variants={riseUp}>
              Diseño y mantengo sistemas institucionales de flujo controlado: solicitudes,
              aprobaciones, auditoría. Del formulario a la base de datos, cada expediente sigue su
              proceso — y ese proceso es lo que construyo.
            </motion.p>
            <motion.div className="cta-row" variants={riseUp}>
              <a className="btn primary" href="#sistemas">Ver sistemas →</a>
              <a className="btn ghost" href="#contacto">Contactar</a>
              <a
                className="btn ghost"
                href="/Wirjin Sanchez (1).pdf"
                download="Wirjin Sanchez CV.pdf"
              >
                Descargar CV ↓
              </a>
            </motion.div>
          </motion.div>

          {/* Photo + stats column — scales on scroll via GSAP */}
          <motion.div
            className="hero-photo-col"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
            }}
          >
            <motion.div
              ref={photoRef}
              className="photo-ring"
              variants={scaleIn}
              style={{ transformOrigin: 'center center' }}
            >
              <div className="photo-ring-inner">
                <div className="avatar-photo">
                  <img
                    src="/me.webp"
                    alt="Wirjin Sanchez"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                    }}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                      (e.currentTarget.nextElementSibling as HTMLElement)!.style.display = 'flex';
                    }}
                  />
                  <span className="avatar-fallback" style={{ display: 'none' }}>WS</span>
                </div>
              </div>
            </motion.div>
            <motion.div className="stats" variants={fadeIn}>
              {heroStats.map((s) => (
                <StatItem key={s.label} count={s.count} label={s.label} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
