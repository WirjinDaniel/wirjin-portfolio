'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, Send, Loader, ShieldCheck, MessageCircle, User } from 'lucide-react';
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
  { icon: Phone, label: 'TELÉFONO', value: '+1 (829) 123-4567', href: 'tel:+18291234567' },
  { icon: MapPin, label: 'UBICACIÓN', value: 'Santo Domingo, RD', href: null },
];

const socials = [
  { icon: GithubIcon, href: 'https://github.com/WirjinDaniel', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/wirjin-daniel-sanchez-amancio-274b4822b/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:danielsanchezamancio1996@gmail.com', label: 'Email' },
];

/* ─── Input with icon ─── */
function FormInput({ icon: Icon, placeholder, type = 'text', required = false }: {
  icon: React.FC<{ size?: number }>;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          position: 'absolute', left: '0.875rem', top: '50%', transform: 'translateY(-50%)',
          color: 'var(--text-soft)', pointerEvents: 'none',
        }}
      >
        <Icon size={15} />
      </div>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        style={{
          width: '100%',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid var(--border)',
          borderRadius: '0.625rem',
          padding: '0.875rem 0.875rem 0.875rem 2.5rem',
          color: 'var(--text)',
          fontSize: '0.85rem',
          outline: 'none',
          transition: 'border-color 0.2s',
        }}
        onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = 'var(--accent)'; }}
        onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = 'var(--border)'; }}
      />
    </div>
  );
}

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); }, 1500);
  };

  return (
    <Section id="contacto">
      <div style={{ width: '100%', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '4rem', alignItems: 'flex-start' }}>

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
                  d.style.borderColor = 'rgba(168,85,247,0.35)';
                  d.style.background = 'rgba(124,58,237,0.06)';
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
                    background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.2)',
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

          {/* Social links */}
          <div>
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
                    a.style.background = 'rgba(124,58,237,0.15)';
                    a.style.boxShadow = '0 0 16px rgba(124,58,237,0.3)';
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

          {/* Dev illustration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            style={{
              position: 'relative',
              height: '160px',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}
          >
            {/* Platform glow */}
            <div style={{
              position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
              width: '280px', height: '20px', borderRadius: '50%',
              background: 'rgba(124,58,237,0.35)', filter: 'blur(20px)',
            }} />

            {/* Laptop */}
            <div style={{
              width: '130px', height: '90px', background: '#0d0d2a',
              border: '2px solid rgba(124,58,237,0.4)', borderRadius: '8px 8px 0 0',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative', zIndex: 2,
              boxShadow: '0 0 30px rgba(124,58,237,0.3)',
            }}>
              <span style={{ fontSize: '1.5rem', fontFamily: 'var(--font-mono)', fontWeight: 900, color: 'var(--accent-bright)' }}>
                {'</>'}
              </span>
            </div>

            {/* Laptop base */}
            <div style={{
              position: 'absolute', bottom: '18px', left: '50%', transform: 'translateX(-50%)',
              width: '160px', height: '8px', background: '#0d0d2a',
              border: '1px solid rgba(124,58,237,0.3)', borderRadius: '0 0 6px 6px', zIndex: 1,
            }} />

            {/* Mug with WS */}
            <div style={{
              position: 'absolute', bottom: '26px', right: '15%',
              width: '42px', height: '46px',
              background: '#0d0d2a', border: '2px solid rgba(124,58,237,0.4)',
              borderRadius: '4px 4px 8px 8px', zIndex: 3,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.55rem', fontWeight: 900, color: 'var(--accent-bright)',
            }}>
              WS
            </div>

            {/* Plant */}
            <div style={{
              position: 'absolute', bottom: '24px', left: '12%',
              fontSize: '1.75rem', zIndex: 3,
            }}>
              🪴
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT: Form ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid var(--border)',
            borderRadius: '1.5rem',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            position: 'relative',
          }}
        >
          {/* Top right envelope */}
          <div
            style={{
              position: 'absolute',
              top: '-2.5rem',
              right: '1.5rem',
              fontSize: '3.5rem',
              filter: 'drop-shadow(0 0 20px rgba(124,58,237,0.6))',
              lineHeight: 1,
            }}
          >
            ✉️
          </div>

          {/* Form header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
            <div
              style={{
                width: '48px', height: '48px', borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--accent), var(--accent-bright))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', flexShrink: 0,
                boxShadow: '0 0 20px rgba(124,58,237,0.4)',
              }}
            >
              <MessageCircle size={22} />
            </div>
            <div>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text)' }}>ENVÍAME UN MENSAJE</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-soft)', marginTop: '0.1rem' }}>
                Completa el formulario y te responderé pronto.
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {/* Row: name + email */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem' }}>
              <FormInput icon={User} placeholder="Nombre completo" required />
              <FormInput icon={Mail} placeholder="Email" type="email" required />
            </div>

            {/* Textarea */}
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '0.875rem', top: '0.875rem', color: 'var(--text-soft)', pointerEvents: 'none' }}>
                <Send size={15} />
              </div>
              <textarea
                required
                placeholder="Mensaje"
                rows={7}
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--border)',
                  borderRadius: '0.625rem',
                  padding: '0.875rem 0.875rem 0.875rem 2.5rem',
                  color: 'var(--text)',
                  fontSize: '0.85rem',
                  outline: 'none',
                  resize: 'vertical',
                  fontFamily: 'inherit',
                  transition: 'border-color 0.2s',
                }}
                onFocus={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = 'var(--accent)'; }}
                onBlur={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = 'var(--border)'; }}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={sending || sent}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.625rem',
                padding: '1rem',
                background: sent
                  ? 'rgba(34,197,94,0.15)'
                  : 'linear-gradient(135deg, #6d28d9, #9333ea)',
                border: sent ? '1px solid #22c55e' : 'none',
                borderRadius: '0.75rem',
                color: sent ? '#22c55e' : '#fff',
                fontSize: '0.95rem',
                fontWeight: 700,
                cursor: sending || sent ? 'default' : 'pointer',
                letterSpacing: '0.03em',
                transition: 'opacity 0.2s, box-shadow 0.2s, transform 0.2s',
              }}
              onMouseEnter={(e) => {
                if (!sent && !sending) {
                  const b = e.currentTarget as HTMLButtonElement;
                  b.style.boxShadow = '0 0 32px rgba(124,58,237,0.5)';
                  b.style.transform = 'translateY(-1px)';
                }
              }}
              onMouseLeave={(e) => {
                const b = e.currentTarget as HTMLButtonElement;
                b.style.boxShadow = 'none';
                b.style.transform = 'none';
              }}
            >
              {sending
                ? <><Loader size={18} style={{ animation: 'spin 1s linear infinite' }} /> Enviando...</>
                : sent
                ? '✓ Mensaje enviado'
                : <><Send size={18} /> Enviar mensaje</>}
            </button>

            {/* Privacy note */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', fontSize: '0.7rem', color: 'var(--text-soft)' }}>
              <ShieldCheck size={13} />
              Tu información está protegida. No compartimos tus datos.
            </div>
          </form>
        </motion.div>

      </div>
    </Section>
  );
}
