'use client';

import { useEffect, useRef } from 'react';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { href: '#perfil', label: 'Perfil' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#sistemas', label: 'Sistemas' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#stack', label: 'Stack' },
  { href: '#contacto', label: 'Contacto' },
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
              link.classList.toggle('active', link.getAttribute('href') === id);
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
    <nav>
      <div className="wrap nav-inner">
        <div className="logo">
          <span className="dot" />
          wirjin.sys
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div className="navlinks">
            {navItems.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                ref={(el) => {
                  if (el) linksRef.current[i] = el;
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
