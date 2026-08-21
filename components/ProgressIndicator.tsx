'use client';

interface Props {
  index: number;
  total?: number;
}

export default function ProgressIndicator({ index, total = 5 }: Props) {
  const current = String(index).padStart(2, '0');
  const max = String(total).padStart(2, '0');

  return (
    <div
      style={{
        position: 'absolute',
        top: '1.5rem',
        right: '1.5rem',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.75rem',
        letterSpacing: '0.1em',
        color: 'var(--text-soft)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.25rem',
        zIndex: 10,
      }}
    >
      <span style={{ color: 'var(--accent-bright)', fontWeight: 600 }}>{current}</span>
      <span>/</span>
      <span>{max}</span>
    </div>
  );
}
