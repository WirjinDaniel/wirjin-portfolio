'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import styles from './Card.module.css';

type Padding = 'none' | 'sm' | 'md' | 'lg';
type Radius = 'md' | 'lg' | 'xl';
type Glow = 'none' | 'md' | 'lg';

interface CardProps extends HTMLMotionProps<'div'> {
  as?: 'div' | 'article';
  padding?: Padding;
  radius?: Radius;
  glow?: Glow;
}

export default function Card({
  as = 'div',
  padding = 'md',
  radius = 'lg',
  glow = 'md',
  className = '',
  children,
  ...rest
}: CardProps) {
  const Component = as === 'article' ? motion.article : motion.div;
  const classes = [
    styles.card,
    styles[`p-${padding}`],
    styles[`r-${radius}`],
    glow !== 'none' && styles[`glow-${glow}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
}
