'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { href: '#perfil',      label: 'Perfil',      num: '01' },
  { href: '#experiencia', label: 'Experiencia',  num: '02' },
  { href: '#sistemas',    label: 'Sistemas',     num: '03' },
  { href: '#habilidades', label: 'Habilidades',  num: '04' },
  { href: '#stack',       label: 'Stack',        num: '05' },
  { href: '#contacto',    label: 'Contacto',     num: '06' },
];

export default function Nav() {
  const linksRef = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = '#' + entry.target.id;
            linksRef.current.forEach((link) => {
              const isActive = link.getAttribute('href') === id;
              link.classList.toggle('active', isActive);
              if (isActive) {
                link.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
              }
            });
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
    >
      <div className="wrap nav-inner">
        <div className="logo">
          <span className="dot" />
          wirjin.sys
        </div>
        <div className="navlinks">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              ref={(el) => { if (el) linksRef.current[i] = el; }}
            >
              <span className="nav-label">{item.label}</span>
            </a>
          ))}
        </div>
        <ThemeToggle />
      </div>
    </motion.nav>
  );
}
