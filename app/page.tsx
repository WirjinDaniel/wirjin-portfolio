'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Home as HomeIcon, User, Code, FolderKanban, GraduationCap, Mail, Moon } from 'lucide-react';
import Navbar from '@/components/Navbar';
import RightNav from '@/components/RightNav';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import Formation from '@/sections/Formation';
import Contact from '@/sections/Contact';

const SECTIONS = ['inicio', 'sobre-mi', 'habilidades', 'proyectos', 'formacion', 'contacto'];

const NAV_ITEMS = [
  { id: 'inicio',       label: 'Inicio',    Icon: HomeIcon },
  { id: 'sobre-mi',     label: 'Sobre mí',  Icon: User },
  { id: 'habilidades',  label: 'Skills',    Icon: Code },
  { id: 'proyectos',    label: 'Proyectos', Icon: FolderKanban },
  { id: 'formacion',    label: 'Formación', Icon: GraduationCap },
  { id: 'contacto',     label: 'Contacto',  Icon: Mail },
];

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
      <a href="#main-content" className="skip-link">Saltar al contenido</a>

      {/* Left sidebar */}
      <Navbar activeSection={activeSection} onNavigate={navigateTo} />

      {/* Main content */}
      <main id="main-content" ref={scrollRef} style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', position: 'relative' }}>
        <Hero onNavigate={navigateTo} />
        <About />
        <Skills />
        <Projects />
        <Formation />
        <Contact />
      </main>

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
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const current = document.documentElement.getAttribute('data-theme') as 'dark' | 'light';
    setTheme(stored || current || 'dark');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    setTheme(next);
  };

  return (
    <nav
      className="mobile-nav"
      aria-label="Navegación móvil"
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
      {NAV_ITEMS.map(({ id, label, Icon }) => {
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
              fontWeight: isActive ? 'var(--font-bold)' : 'var(--font-regular)',
              cursor: 'pointer',
              padding: '0.4rem 0.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.2rem',
              minWidth: '44px',
              minHeight: '44px',
              transition: 'color var(--duration-base) var(--ease-standard)',
            }}
          >
            <Icon size={14} />
            {label}
          </button>
        );
      })}

      {/* Theme toggle */}
      <button
        onClick={toggleTheme}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--text-soft)',
          fontSize: '0.6rem',
          cursor: 'pointer',
          padding: '0.4rem 0.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.2rem',
          minWidth: '44px',
          minHeight: '44px',
          transition: 'color var(--duration-base) var(--ease-standard)',
        }}
      >
        <Moon size={14} />
        {theme === 'dark' ? 'Oscuro' : 'Claro'}
      </button>
    </nav>
  );
}
