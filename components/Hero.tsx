'use client';

import { useTypingEffect } from '@/hooks/useTypingEffect';
import { useCountUp } from '@/hooks/useCountUp';
import { heroStats, roleText } from '@/lib/data';

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

  return (
    <header className="hero">
      <div className="wrap">
        <div className="hero-layout">
          <div className="hero-text">
            <span className="pill">◉ disponible para nuevos proyectos</span>
            <h1 className="hero-title">
              Wirjin<br /><span>Sanchez</span>
            </h1>
            <p className="role">
              {displayed}
              {!done && <span className="cursor" />}
              {done && <span className="cursor" />}
            </p>
            <p className="tagline">
              Diseño y mantengo sistemas institucionales de flujo controlado: solicitudes,
              aprobaciones, auditoría. Del formulario a la base de datos, cada expediente sigue su
              proceso — y ese proceso es lo que construyo.
            </p>


            <div className="cta-row">
              <a className="btn primary" href="#sistemas">Ver sistemas →</a>
              <a className="btn ghost" href="#contacto">Contactar</a>
              <a className="btn ghost" href="/Wirjin Sanchez (1).pdf" download="Wirjin Sanchez CV.pdf">Descargar CV ↓</a>
            </div>
          </div>

          <div className="hero-photo-col">
            <div className="photo-ring">
              <div className="photo-ring-inner">
                <div className="avatar-photo">
                  <img src="/me.webp" alt="Wirjin Sanchez" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; (e.currentTarget.nextElementSibling as HTMLElement)!.style.display = 'flex'; }} />
                  <span className="avatar-fallback" style={{ display: 'none' }}>WS</span>
                </div>
              </div>
            </div>
            <div className="stats">
              {heroStats.map((s) => (
                <StatItem key={s.label} count={s.count} label={s.label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
