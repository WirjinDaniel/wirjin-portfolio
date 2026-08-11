'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { perfilTags } from '@/lib/data';

export default function SectionPerfil() {
  const headRef = useScrollReveal();
  const ledeRef = useScrollReveal();
  const tagsRef = useScrollReveal();

  return (
    <section id="perfil">
      <div className="wrap">
        <div className="sec-head reveal" ref={headRef as React.Ref<HTMLDivElement>}>
          <span className="tag">01</span>
          <h2>Perfil</h2>
        </div>
        <p className="lede reveal" ref={ledeRef as React.Ref<HTMLParagraphElement>}>
          Analista de Sistemas y desarrollador backend con más de 2 años de experiencia institucional, con una trayectoria
          que va desde soporte técnico hasta el diseño y desarrollo de sistemas empresariales. Combino el conocimiento de los
          procesos institucionales con el desarrollo de software para convertir necesidades reales de negocio —nómina, gastos, 
          activos e inventario— en soluciones digitales con reglas de negocio, roles y permisos, validaciones, automatización y trazabilidad.
        </p>
        <div className="tags reveal" style={{ marginTop: 22 }} ref={tagsRef as React.Ref<HTMLDivElement>}>
          {perfilTags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
