'use client';

import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useSectionParallax } from '@/hooks/useSectionParallax';
import { perfilTags } from '@/lib/data';

const tagVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 6 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function SectionPerfil() {
  const headRef = useScrollReveal();
  const ledeRef = useScrollReveal();
  const sectionRef = useSectionParallax();

  return (
    <section id="perfil" ref={sectionRef as React.Ref<HTMLElement>}>
      <div className="wrap">
        <div className="sec-head reveal" ref={headRef as React.Ref<HTMLDivElement>}>
          <h2>Perfil</h2>
        </div>
        <p className="lede reveal" ref={ledeRef as React.Ref<HTMLParagraphElement>}>
          Analista de Sistemas y desarrollador backend con más de 2 años de experiencia institucional, con una trayectoria
          que va desde soporte técnico hasta el diseño y desarrollo de sistemas empresariales. Combino el conocimiento de los
          procesos institucionales con el desarrollo de software para convertir necesidades reales de negocio —nómina, gastos,
          activos e inventario— en soluciones digitales con reglas de negocio, roles y permisos, validaciones, automatización y trazabilidad.
        </p>
        <motion.div
          className="tags"
          style={{ marginTop: 22 }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.055, delayChildren: 0.05 } },
          }}
        >
          {perfilTags.map((t) => (
            <motion.span key={t} variants={tagVariants}>{t}</motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
