'use client';

const ITEMS = [
  { id: 'inicio', label: 'INICIO' },
  { id: 'sobre-mi', label: 'SOBRE MÍ' },
  { id: 'habilidades', label: 'HABILIDADES' },
  { id: 'proyectos', label: 'PROYECTOS' },
  { id: 'formacion', label: 'FORMACIÓN' },
  { id: 'contacto', label: 'CONTACTO' },
];

interface Props {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export default function RightNav({ activeSection, onNavigate }: Props) {
  return (
    <nav
      className="right-nav"
      aria-label="Navegación de secciones"
      style={{
        width: 'var(--rightnav-w)',
        height: '100vh',
        position: 'sticky',
        top: 0,
        flexShrink: 0,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 0,
        zIndex: 20,
        borderLeft: '1px solid var(--border-subtle)',
      }}
    >
      {/* Vertical line */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '1px',
          height: `${(ITEMS.length - 1) * 56}px`,
          background: 'linear-gradient(to bottom, transparent, var(--border), transparent)',
        }}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {ITEMS.map(({ id, label }, i) => {
          const isActive = activeSection === id;
          const num = String(i + 1).padStart(2, '0');
          return (
            <button
              key={id}
              onClick={() => onNavigate(id)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.25rem',
                padding: '0.25rem 0',
                minWidth: '44px',
                minHeight: '44px',
              }}
            >
              {/* Dot */}
              <div
                style={{
                  width: isActive ? '10px' : '7px',
                  height: isActive ? '10px' : '7px',
                  borderRadius: 'var(--radius-full)',
                  background: isActive ? 'var(--accent-bright)' : 'rgba(255,255,255,0.15)',
                  border: isActive ? '2px solid rgba(102,132,196,0.35)' : '1px solid rgba(255,255,255,0.1)',
                  boxShadow: isActive ? '0 0 12px var(--accent-glow)' : 'none',
                  transition: 'all var(--duration-base) var(--ease-standard)',
                  animation: isActive ? 'pulseDot 2s ease-in-out infinite' : 'none',
                }}
              />
              {/* Number */}
              <span
                style={{
                  fontSize: '0.55rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 'var(--font-bold)',
                  color: isActive ? 'var(--accent-bright)' : 'var(--text-soft)',
                  transition: 'color var(--duration-base) var(--ease-standard)',
                  letterSpacing: '0.05em',
                }}
              >
                {num}
              </span>
              {/* Label — always visible */}
              <span
                style={{
                  fontSize: '0.45rem',
                  fontWeight: 'var(--font-bold)',
                  letterSpacing: '0.08em',
                  color: isActive ? 'var(--text)' : 'var(--text-soft)',
                  transition: 'color var(--duration-base) var(--ease-standard)',
                  maxWidth: '60px',
                  textAlign: 'center',
                  lineHeight: 1.2,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                }}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
