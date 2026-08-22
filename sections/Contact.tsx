'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowRight } from 'lucide-react';
import Section from '@/components/Section';

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const contactInfo = [
  { icon: Mail, label: 'EMAIL', value: 'danielsanchezamancio1996@gmail.com', href: 'mailto:danielsanchezamancio1996@gmail.com' },
  { icon: MapPin, label: 'UBICACIÓN', value: 'Santo Domingo, RD', href: null },
];

const socials = [
  { icon: GithubIcon, href: 'https://github.com/WirjinDaniel', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/wirjin-daniel-sanchez-amancio-274b4822b/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:danielsanchezamancio1996@gmail.com', label: 'Email' },
];

export default function Contact() {
  return (
    <Section id="contacto">
      <div className="contact-grid">

        {/* ── LEFT ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

          {/* Title */}
          <div>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--accent)', marginBottom: '0.625rem' }}>
              TRABAJEMOS JUNTOS
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
              <span style={{ color: 'var(--text)' }}>CON</span>
              <span className="glow-text">TACTO</span>
            </h2>
            <div style={{ width: '40px', height: '3px', background: 'linear-gradient(90deg, var(--accent), var(--accent-bright))', borderRadius: '2px', marginTop: '0.75rem', marginBottom: '1rem' }} />
            <p style={{ fontSize: '0.875rem', color: 'var(--text-soft)', lineHeight: 1.75 }}>
              ¿Tienes un proyecto en mente o quieres colaborar?
              <br />Estoy disponible para nuevas oportunidades.
            </p>
          </div>

          {/* Info cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '0.875rem 1rem',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--border)',
                  borderRadius: '0.875rem',
                  transition: 'border-color 0.2s, background 0.2s',
                  cursor: href ? 'pointer' : 'default',
                }}
                whileHover={{ scale: 1.01 }}
                onMouseEnter={(e) => {
                  const d = e.currentTarget as HTMLDivElement;
                  d.style.borderColor = 'rgba(102,132,196,0.3)';
                  d.style.background = 'rgba(79,111,174,0.05)';
                }}
                onMouseLeave={(e) => {
                  const d = e.currentTarget as HTMLDivElement;
                  d.style.borderColor = 'var(--border)';
                  d.style.background = 'rgba(255,255,255,0.03)';
                }}
                onClick={() => href && window.open(href)}
              >
                {/* Icon box */}
                <div
                  style={{
                    width: '40px', height: '40px', borderRadius: '0.625rem',
                    background: 'rgba(79,111,174,0.12)', border: '1px solid rgba(79,111,174,0.16)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--accent-bright)', flexShrink: 0,
                  }}
                >
                  <Icon size={17} />
                </div>

                {/* Text */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--accent-bright)', marginBottom: '0.15rem' }}>
                    {label}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text)', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {value}
                  </div>
                </div>

                {/* Arrow */}
                {href && (
                  <div style={{ color: 'var(--text-soft)', flexShrink: 0 }}>
                    <ArrowRight size={15} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Social links — hidden on mobile, shown after form */}
          <div className="contact-socials-desktop">
            <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--text-soft)', marginBottom: '0.875rem' }}>
              SÍGUEME EN
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: '42px', height: '42px', borderRadius: '50%',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-soft)', textDecoration: 'none',
                    transition: 'color 0.2s, border-color 0.2s, background 0.2s, box-shadow 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    const a = e.currentTarget as HTMLAnchorElement;
                    a.style.color = 'var(--accent-bright)';
                    a.style.borderColor = 'var(--accent)';
                    a.style.background = 'rgba(79,111,174,0.12)';
                    a.style.boxShadow = '0 0 16px rgba(79,111,174,0.25)';
                  }}
                  onMouseLeave={(e) => {
                    const a = e.currentTarget as HTMLAnchorElement;
                    a.style.color = 'var(--text-soft)';
                    a.style.borderColor = 'var(--border)';
                    a.style.background = 'rgba(255,255,255,0.05)';
                    a.style.boxShadow = 'none';
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* ── RIGHT: Panel decorativo ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingTop: '2rem' }}
        >
          {/* Badge online */}
          <div style={{
            position: 'absolute', top: 0, right: 0,
            display: 'flex', alignItems: 'center', gap: '0.4rem',
            padding: '0.35rem 0.85rem',
            background: 'rgba(34,197,94,0.1)',
            border: '1px solid rgba(34,197,94,0.3)',
            borderRadius: '999px',
            fontSize: '0.75rem', fontWeight: 700, color: '#4ade80',
          }}>
            <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 6px #22c55e', animation: 'pulseDot 2s infinite' }} />
            Online
          </div>

          {/* Editor card */}
          <div style={{
            background: 'linear-gradient(160deg, #0d1525 0%, #080c18 100%)',
            border: '1px solid rgba(79,111,174,0.25)',
            borderRadius: '1rem',
            overflow: 'hidden',
            boxShadow: '0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)',
          }}>
            {/* Title bar */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.75rem 1rem',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              background: 'rgba(255,255,255,0.02)',
            }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e' }} />
              <div style={{
                marginLeft: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)',
              }}>
                <span style={{ color: 'var(--accent-bright)', fontWeight: 700 }}>{'</>'}</span>
                contacto.js
              </div>
            </div>

            {/* Code body */}
            <div style={{ padding: '1.5rem 1.25rem', fontFamily: 'var(--font-mono)', fontSize: '0.88rem', lineHeight: 2 }}>
              {[
                { n: 1, content: <><span style={{ color: '#6684C4' }}>const </span><span style={{ color: '#7dd3fc' }}>contacto</span><span style={{ color: 'rgba(255,255,255,0.35)' }}> = {'{'}</span></> },
                { n: 2, content: <><span style={{ paddingLeft: '1.5rem', display: 'inline-block' }}><span style={{ color: '#86efac' }}>nombre</span><span style={{ color: 'rgba(255,255,255,0.35)' }}>: </span><span style={{ color: '#fde68a' }}>&quot;Wirjin&quot;</span><span style={{ color: 'rgba(255,255,255,0.35)' }}>,</span></span></> },
                { n: 3, content: <><span style={{ paddingLeft: '1.5rem', display: 'inline-block' }}><span style={{ color: '#86efac' }}>estado</span><span style={{ color: 'rgba(255,255,255,0.35)' }}>: </span><span style={{ color: '#4ade80' }}>&quot;Disponible&quot;</span><span style={{ color: 'rgba(255,255,255,0.35)' }}>,</span></span></> },
                { n: 5, content: <><span style={{ paddingLeft: '1.5rem', display: 'inline-block' }}><span style={{ color: '#86efac' }}>mensaje</span><span style={{ color: 'rgba(255,255,255,0.35)' }}>: </span><span style={{ color: '#f9a8d4' }}>&quot;¡Hablemos!&quot;</span><span style={{ color: 'rgba(255,255,255,0.35)' }}>,</span></span></> },
                { n: 6, content: <span style={{ color: 'rgba(255,255,255,0.35)' }}>{'};'}</span> },
                { n: 7, content: null },
              ].map(({ n, content }) => (
                <div key={n} style={{ display: 'flex', gap: '1.5rem' }}>
                  <span style={{ color: 'rgba(255,255,255,0.18)', userSelect: 'none', minWidth: '1ch' }}>{n}</span>
                  <span>{content}</span>
                </div>
              ))}
              {/* Cursor */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.25rem' }}>
                <span style={{ color: 'rgba(255,255,255,0.18)', userSelect: 'none', minWidth: '1ch' }}>8</span>
                <span style={{ color: '#6684C4' }}>▸</span>
                <div style={{ width: '7px', height: '14px', background: 'var(--accent-bright)', animation: 'pulseDot 1s ease-in-out infinite' }} />
              </div>
            </div>
          </div>

          {/* Texto cursivo animado */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            style={{ textAlign: 'center', paddingTop: '0.5rem', position: 'relative' }}
          >
            {/* Glow detrás del texto */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(102,132,196,0.12), transparent)',
              pointerEvents: 'none',
            }} />
            {'Siempre abierto\na nuevas ideas'.split('\n').map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.15, ease: 'easeOut' }}
                style={{
                  fontFamily: 'Georgia, serif',
                  fontStyle: 'italic',
                  fontSize: '1.5rem',
                  fontWeight: 400,
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.75) 0%, var(--accent-bright) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1.5,
                  letterSpacing: '0.01em',
                }}
              >
                {line}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Mobile-only: socials after form ── */}
        <div className="contact-socials-mobile">
          <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--text-soft)', marginBottom: '0.875rem' }}>
            SÍGUEME EN
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  width: '42px', height: '42px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-soft)', textDecoration: 'none',
                  transition: 'color 0.2s, border-color 0.2s, background 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={(e) => {
                  const a = e.currentTarget as HTMLAnchorElement;
                  a.style.color = 'var(--accent-bright)';
                  a.style.borderColor = 'var(--accent)';
                  a.style.background = 'rgba(79,111,174,0.12)';
                  a.style.boxShadow = '0 0 16px rgba(79,111,174,0.25)';
                }}
                onMouseLeave={(e) => {
                  const a = e.currentTarget as HTMLAnchorElement;
                  a.style.color = 'var(--text-soft)';
                  a.style.borderColor = 'var(--border)';
                  a.style.background = 'rgba(255,255,255,0.05)';
                  a.style.boxShadow = 'none';
                }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}
