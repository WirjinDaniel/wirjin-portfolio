'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import RightNav from '@/components/RightNav';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import Formation from '@/sections/Formation';
import Contact from '@/sections/Contact';

const SECTIONS = ['inicio', 'sobre-mi', 'habilidades', 'proyectos', 'formacion', 'contacto'];

const LABELS: Record<string, string> = {
  inicio: 'Inicio',
  'sobre-mi': 'Sobre mí',
  habilidades: 'Skills',
  proyectos: 'Proyectos',
  formacion: 'Formación',
  contacto: 'Contacto',
};

export default function Home() {
  const [activeSection, setActiveSection] = useState('inicio');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: container, threshold: 0.4 }
    );

    SECTIONS.forEach((id) => {
      const el = container.querySelector(`#${id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navigateTo = useCallback((id: string) => {
    const container = scrollRef.current;
    if (!container) return;
    const target = container.querySelector(`#${id}`);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: 'var(--bg)' }}>
      {/* Left sidebar */}
      <Navbar activeSection={activeSection} onNavigate={navigateTo} />

      {/* Main content */}
      <div ref={scrollRef} style={{ flex: 1, overflowY: 'auto', position: 'relative' }}>
        <Hero onNavigate={navigateTo} />
        <About />
        <Skills />
        <Projects />
        <Formation />
        <Contact />
      </div>

      {/* Right nav */}
      <RightNav activeSection={activeSection} onNavigate={navigateTo} />

      {/* Mobile bottom nav */}
      <MobileNav activeSection={activeSection} onNavigate={navigateTo} />
    </div>
  );
}

function MobileNav({
  activeSection,
  onNavigate,
}: {
  activeSection: string;
  onNavigate: (id: string) => void;
}) {
  return (
    <div
      className="mobile-nav"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: 'rgba(6,6,26,0.96)',
        borderTop: '1px solid var(--border)',
        backdropFilter: 'blur(12px)',
        padding: '0.4rem 0',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      {SECTIONS.map((id) => {
        const isActive = activeSection === id;
        return (
          <button
            key={id}
            onClick={() => onNavigate(id)}
            style={{
              background: 'none',
              border: 'none',
              color: isActive ? 'var(--accent-bright)' : 'var(--text-soft)',
              fontSize: '0.6rem',
              fontWeight: isActive ? 700 : 400,
              cursor: 'pointer',
              padding: '0.4rem 0.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.2rem',
              transition: 'color 0.2s',
            }}
          >
            <span
              style={{
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: isActive ? 'var(--accent-bright)' : 'transparent',
              }}
            />
            {LABELS[id]}
          </button>
        );
      })}
    </div>
  );
}
