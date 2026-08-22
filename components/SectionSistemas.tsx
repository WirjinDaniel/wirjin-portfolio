'use client';

import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useSectionParallax } from '@/hooks/useSectionParallax';
import { projects } from '@/lib/data';
import ProjectCard from './ProjectCard';

export default function SectionSistemas() {
  const headRef = useScrollReveal();
  const sectionRef = useSectionParallax();

  return (
    <section id="sistemas" ref={sectionRef as React.Ref<HTMLElement>}>
      <div className="wrap">
        <div className="sec-head reveal" ref={headRef as React.Ref<HTMLDivElement>}>
          <h2>Estado de sistemas</h2>
        </div>
        <motion.span
          className="badge-note"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          🔐 Acceso restringido. Código y repositorios no públicos por políticas de confidencialidad.
        </motion.span>
        <motion.div
          className="cards"
          style={{ marginTop: 20 }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15, delayChildren: 0.05 } },
          }}
        >
          {projects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
