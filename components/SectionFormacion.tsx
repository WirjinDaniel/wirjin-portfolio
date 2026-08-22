'use client';

import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { formation } from '@/lib/data';

const colVariants = {
  hidden: { opacity: 0, x: -18 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -12 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

function FormationCol({
  title,
  items,
  delay = 0,
}: {
  title: string;
  items: string[];
  delay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: colVariants.hidden,
        show: {
          ...colVariants.show,
          transition: {
            ...colVariants.show.transition,
            delay,
            staggerChildren: 0.07,
            delayChildren: delay + 0.12,
          },
        },
      }}
    >
      <motion.h4 variants={colVariants}>{title}</motion.h4>
      <ul>
        {items.map((item, i) => {
          const [bold, rest] = item.includes(' — ') ? item.split(' — ') : [null, item];
          return (
            <motion.li key={i} variants={itemVariants}>
              {bold ? (
                <>
                  <b>{bold}</b>{' — '}{rest}
                </>
              ) : (
                item
              )}
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
}

export default function SectionFormacion() {
  const headRef = useScrollReveal();

  return (
    <section id="formacion">
      <div className="wrap">
        <div className="sec-head reveal" ref={headRef as React.Ref<HTMLDivElement>}>
          <h2>Formación</h2>
        </div>
        <div className="formacion-grid">
          <FormationCol title="Educación" items={formation.education} delay={0} />
          <FormationCol title="Capacitaciones" items={formation.training} delay={0.1} />
        </div>
      </div>
    </section>
  );
}
