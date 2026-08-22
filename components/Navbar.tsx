'use client';

import { Home, User, Code, FolderKanban, Mail, GraduationCap, ChevronRight, Rocket, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

const links = [
  { id: 'inicio', label: 'Inicio', icon: Home },
  { id: 'sobre-mi', label: 'Sobre mí', icon: User },
  { id: 'habilidades', label: 'Habilidades', icon: Code },
  { id: 'proyectos', label: 'Proyectos', icon: FolderKanban },
  { id: 'formacion', label: 'Formación', icon: GraduationCap },
  { id: 'contacto', label: 'Contacto', icon: Mail },
];

interface Props {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: Props) {
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
      className="sidebar"
      style={{
        width: '260px',
        height: '100vh',
        flexDirection: 'column',
        background: 'var(--sidebar, #0B1020)',
        borderRight: '1px solid rgba(79,111,174,0.14)',
        flexShrink: 0,
        position: 'sticky',
        top: 0,
        zIndex: 30,
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      {/* ── Logo ── */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '2rem 1.5rem 1.25rem',
          gap: '1rem',
        }}
      >
        {/* WS icon box */}
        <div style={{ position: 'relative', width: '80px', height: '80px' }}>
          {/* Outer orbit ring (slow CW) */}
          <div
            style={{
              position: 'absolute',
              inset: '-14px',
              borderRadius: '50%',
              border: '1px solid rgba(79,111,174,0.25)',
              animation: 'rotateSlow 8s linear infinite',
            }}
          >
            {/* Small dot orbiting */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: '#6684C4',
                boxShadow: '0 0 8px #6684C4',
                transform: 'translate(-50%, -50%) translateY(-54px)',
              }}
            />
          </div>

          {/* Inner orbit ring (slow CCW) */}
          <div
            style={{
              position: 'absolute',
              inset: '-6px',
              borderRadius: '50%',
              border: '1px dashed rgba(102,132,196,0.18)',
              animation: 'rotateSlowReverse 12s linear infinite',
            }}
          />

          {/* WS box */}
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '1.25rem',
              background: 'linear-gradient(135deg, #0D1322, #4F6FAE)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'wsGlow 3s ease-in-out infinite',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <span
              style={{
                fontSize: '1.75rem',
                fontWeight: 900,
                fontStyle: 'italic',
                color: '#fff',
                letterSpacing: '-0.04em',
                textShadow: '0 0 20px rgba(255,255,255,0.5)',
              }}
            >
              WS
            </span>
          </div>
        </div>

        {/* Name & role */}
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              fontSize: '0.9rem',
              fontWeight: 800,
              letterSpacing: '0.05em',
              color: 'var(--text)',
            }}
          >
          </div>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-soft)', marginTop: '0.2rem' }}>
            Developer
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.07)' }} />

        {/* Availability badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.72rem',
            color: 'var(--text-soft)',
          }}
        >
          <div
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: '#22c55e',
              boxShadow: '0 0 8px #22c55e',
              animation: 'pulseDot 2s ease-in-out infinite',
            }}
          />
          Disponible para proyectos
        </div>
      </div>

      {/* ── Nav links ── */}
      <ul
        style={{
          listStyle: 'none',
          padding: '0.25rem 0.875rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          flex: 1,
        }}
      >
        {links.map(({ id, label, icon: Icon }) => {
          const isActive = activeSection === id;
          return (
            <li key={id}>
              <button
                onClick={() => onNavigate(id)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  background: isActive
                    ? 'linear-gradient(135deg, rgba(79,111,174,0.2), rgba(79,111,174,0.08))'
                    : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${isActive ? 'rgba(102,132,196,0.35)' : 'rgba(255,255,255,0.06)'}`,
                  borderLeft: `3px solid ${isActive ? 'var(--accent-bright)' : 'transparent'}`,
                  borderRadius: '0.75rem',
                  color: isActive ? 'var(--text)' : 'var(--text-soft)',
                  fontSize: '0.85rem',
                  fontWeight: isActive ? 700 : 400,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  textAlign: 'left',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    const b = e.currentTarget as HTMLButtonElement;
                    b.style.background = 'rgba(79,111,174,0.07)';
                    b.style.borderColor = 'rgba(102,132,196,0.18)';
                    b.style.color = 'var(--text)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    const b = e.currentTarget as HTMLButtonElement;
                    b.style.background = 'rgba(255,255,255,0.03)';
                    b.style.borderColor = 'rgba(255,255,255,0.06)';
                    b.style.color = 'var(--text-soft)';
                  }
                }}
              >
                {/* Icon box */}
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '0.5rem',
                    background: isActive
                      ? 'rgba(79,111,174,0.25)'
                      : 'rgba(255,255,255,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isActive ? 'var(--accent-bright)' : 'inherit',
                    flexShrink: 0,
                    transition: 'background 0.2s',
                  }}
                >
                  <Icon size={15} />
                </div>

                <span style={{ flex: 1 }}>{label}</span>

                <ChevronRight
                  size={14}
                  style={{
                    color: isActive ? 'var(--accent-bright)' : 'rgba(255,255,255,0.2)',
                    flexShrink: 0,
                  }}
                />
              </button>
            </li>
          );
        })}
      </ul>

      {/* ── Bottom area ── */}
      <div style={{ padding: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {/* Tagline card */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.875rem',
            padding: '0.875rem 1rem',
            background: 'rgba(79,111,174,0.08)',
            border: '1px solid rgba(79,111,174,0.16)',
            borderRadius: '0.875rem',
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(79,111,174,0.2)',
              border: '1px solid rgba(102,132,196,0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-bright)',
              flexShrink: 0,
            }}
          >
            <Rocket size={16} />
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text)', lineHeight: 1.3 }}>
              Construyendo soluciones eficientes
            </div>
            <div style={{ fontSize: '0.62rem', color: 'var(--text-soft)', marginTop: '0.2rem' }}>
              Código • Diseño • Impacto
            </div>
          </div>
        </div>

        {/* Dark mode toggle (decorative) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.75rem 1rem',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '0.75rem',
          }}
        >
          <Moon size={15} style={{ color: 'var(--text-soft)' }} />
          <span style={{ fontSize: '0.8rem', color: 'var(--text-soft)', flex: 1 }}>
            {theme === 'dark' ? 'Modo oscuro' : 'Modo claro'}
          </span>
          {/* Toggle switch */}
          <div
            onClick={toggleTheme}
            style={{
              width: '36px',
              height: '20px',
              borderRadius: '99px',
              background: theme === 'dark'
                ? 'linear-gradient(135deg, var(--accent), var(--accent-bright))'
                : 'rgba(200,200,200,0.4)',
              position: 'relative',
              cursor: 'pointer',
              flexShrink: 0,
              boxShadow: theme === 'dark' ? '0 0 10px rgba(79,111,174,0.32)' : 'none',
              transition: 'background 0.25s',
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: theme === 'dark' ? 'auto' : '3px',
                right: theme === 'dark' ? '3px' : 'auto',
                top: '3px',
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                background: '#fff',
                transition: 'left 0.25s, right 0.25s',
              }}
            />
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            textAlign: 'center',
            padding: '0.5rem 0',
            fontSize: '0.6rem',
            color: 'rgba(255,255,255,0.25)',
            lineHeight: 1.6,
          }}
        >
          © 2024 Wirjin Sánchez
          <br />
          Todos los derechos reservados.
        </div>
      </div>
    </nav>
  );
}
