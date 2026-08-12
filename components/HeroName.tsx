'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './HeroName.module.css';

const WIRJIN  = 'Wirjin'.split('');
const SANCHEZ = 'Sanchez'.split('');
const TOTAL   = WIRJIN.length + SANCHEZ.length;

interface Props {
  /** Render only the animated letters — no badge, no subtitle */
  bare?: boolean;
}

const STAGGER_MS = 90;
const FLIP_MS    = 620;
const PAUSE_MS   = 2800;
const INITIAL_MS = 350;

export default function HeroName({ bare = false }: Props) {
  const [mounted, setMounted] = useState(false);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>(Array(TOTAL).fill(null));
  const timerRef   = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const letters = letterRefs.current.filter(Boolean) as HTMLSpanElement[];

    function runCascade() {
      letters.forEach((el, i) => {
        setTimeout(() => {
          // Remove class, force reflow, re-add — restarts the animation cleanly
          el.classList.remove(styles.flipping);
          void el.offsetWidth;
          el.classList.add(styles.flipping);
        }, i * STAGGER_MS);
      });

      const totalMs = (TOTAL - 1) * STAGGER_MS + FLIP_MS + PAUSE_MS;
      timerRef.current = setTimeout(runCascade, totalMs);
    }

    timerRef.current = setTimeout(runCascade, INITIAL_MS);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [mounted]);

  const nameBlock = (
    <div className={styles.heroName} aria-label="Wirjin Sanchez">
      {/* Wirjin — white */}
      <div className={styles.nameRow} aria-hidden="true">
        {WIRJIN.map((ch, i) => (
          <span
            key={i}
            ref={(el) => { letterRefs.current[i] = el; }}
            className={styles.letter}
          >
            {ch}
          </span>
        ))}
      </div>

      {/* Sanchez — green */}
      <div className={styles.nameRow} aria-hidden="true">
        {SANCHEZ.map((ch, i) => (
          <span
            key={i}
            ref={(el) => { letterRefs.current[WIRJIN.length + i] = el; }}
            className={`${styles.letter} ${styles.green}`}
          >
            {ch}
          </span>
        ))}
      </div>
    </div>
  );

  if (bare) return nameBlock;

  return (
    <div className={styles.wrapper}>
      {/* Badge */}
      <div className={styles.badge} role="status" aria-label="Disponible para nuevos proyectos">
        <span className={styles.dot} aria-hidden="true" />
        disponible para nuevos proyectos
      </div>

      {nameBlock}

      {/* Subtitle */}
      <p className={`${styles.subtitle}${mounted ? ` ${styles.subtitleVisible}` : ''}`}>
        Analista de Sistemas · Desarrollador Backend
        <br />
        Python · Django REST · SQL Server · React
      </p>
    </div>
  );
}
