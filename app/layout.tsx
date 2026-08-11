import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Wirjin Sanchez — Analista de Sistemas / Desarrollador',
  description:
    'Analista de Sistemas & Desarrollador Backend. Python / Django REST Framework / SQL Server, con frontend en React & Next.js. Santo Domingo, RD.',
  openGraph: {
    title: 'Wirjin Sanchez — Analista de Sistemas / Desarrollador',
    description:
      'Diseño y mantengo sistemas institucionales de flujo controlado: solicitudes, aprobaciones, auditoría.',
    locale: 'es_DO',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Wirjin Sanchez — Analista de Sistemas / Desarrollador',
    description:
      'Diseño y mantengo sistemas institucionales de flujo controlado: solicitudes, aprobaciones, auditoría.',
  },
};

const themeScript = `
(function(){
  try {
    var stored = localStorage.getItem('theme');
    var preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    var theme = stored || preferred;
    document.documentElement.setAttribute('data-theme', theme);
  } catch(e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      data-theme="dark"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body style={{ fontFamily: 'var(--font-sans)' }}>{children}</body>
    </html>
  );
}
