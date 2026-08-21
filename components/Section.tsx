'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, children, className = '' }: Props) {
  return (
    <motion.section
      id={id}
      className={`section-panel ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  );
}
