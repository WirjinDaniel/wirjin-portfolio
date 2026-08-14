'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { projects } from '@/lib/data';
import ProjectCard from './ProjectCard';

export default function SectionSistemas() {
  const headRef = useScrollReveal();
  const badgeRef = useScrollReveal();

  return (
    <section id="sistemas">
      <div className="wrap">
        <div className="sec-head reveal" ref={headRef as React.Ref<HTMLDivElement>}>
          <h2>Estado de sistemas</h2>
        </div>
        <span className="badge-note reveal" ref={badgeRef as React.Ref<HTMLSpanElement>}>
          🔐 Acceso restringido. Código y repositorios no públicos por políticas de confidencialidad.
        </span>
        <div className="cards" style={{ marginTop: 20 }}>
          {projects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
