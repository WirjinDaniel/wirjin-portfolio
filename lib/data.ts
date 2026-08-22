export interface Experience {
  period: string;
  title: string;
  org: string;
  bullets: string[];
}

export interface Project {
  name: string;
  description: string;
  status: 'op' | 'dev';
  statusLabel: string;
  fill: number;
  fillLabel: string;
  tags: string[];
  image?: string;
  highlights?: string[];
}

export interface StackGroup {
  category: string;
  items: string[];
}

export interface HeroStat {
  count: number;
  label: string;
}

export interface Formation {
  education: string[];
  training: string[];
}

export const heroStats: HeroStat[] = [
  { count: 2, label: 'experiencia en TI' },
  { count: 2, label: 'sistemas construidos' },
  { count: 4, label: 'etapas de aprobación automatizadas' },
];

export const experiences: Experience[] = [
  {
    period: '2024 – presente',
    title: 'Analista de Sistemas',
    org: 'INABIE · Dirección de Tecnología',
    bullets: [
      'Diseño de sistemas a partir de los recursos y necesidades reales de cada área.',
      'Planificación de recursos y tiempos para el desarrollo de programas institucionales.',
      'Levantamiento de requerimientos y traducción a soluciones de software.',
      'Definición de normas y procedimientos técnicos internos.',
    ],
  },
  {
    period: '2023 – 2024',
    title: 'Analista de Recursos Humanos',
    org: 'INABIE · Depto. de Registro, Control y Nómina',
    bullets: [
      'Registro, actualización y generación de nómina mediante el SASP.',
      'Cálculo de horas extras y procesamiento de nómina.',
      'Diseño de cuadros y reportes estadísticos del área de personal.',
    ],
  },
  {
    period: '2019 – 2023',
    title: 'Auxiliar Administrativo II',
    org: 'INABIE · Depto. de Registro, Control y Nómina',
    bullets: [
      'Recepción y revisión de solicitudes de pago y reportes de tiempo extra.',
      'Control del programa anual de vacaciones del personal.',
      'Soporte a usuarios y verificación de cumplimiento en asistencia.',
    ],
  },
  {
    period: '2015 – 2016',
    title: 'Soporte Técnico',
    org: 'Hardware & Software',
    bullets: [
      'Diagnóstico y solución de incidencias en equipos informáticos.',
      'Instalación y configuración de sistemas y aplicaciones.',
    ],
  },
];

export const projects: Project[] = [
  {
    name: 'Sistema de Gestión de Viáticos',
    description:
      'Plataforma institucional para la solicitud, evaluación y liquidación de viáticos, con flujo de aprobación en cuatro etapas — Contabilidad, Presupuesto, Auditoría y Tesorería — y control de acceso por rol.',
    status: 'op',
    statusLabel: 'operativo',
    fill: 96,
    fillLabel: 'Adopción institucional',
    tags: ['Next.js', 'Django REST', 'SQL Server', 'LDAP/AD', 'Celery + Redis'],
    image: '/Viaticos dashordad .png',
    highlights: [
      'Flujo de 4 etapas: Contabilidad → Presupuesto → Auditoría → Tesorería',
      'Autenticación con LDAP / Active Directory institucional',
      'Notificaciones automáticas por correo en cada cambio de estado',
      'Panel de auditoría con historial completo por expediente',
      'Control de acceso granular por rol y departamento',
    ],
  },
  {
    name: 'Sistema de Inventario/POS',
    description:
      'Producto propio para el control de activos fijos de empresas medianas: registro, depreciación automática y trazabilidad por código QR, construido reutilizando la infraestructura del sistema de viáticos.',
    status: 'dev',
    statusLabel: 'en desarrollo',
    fill: 55,
    fillLabel: 'Avance del roadmap',
    tags: ['Django REST', 'Celery Beat', 'QR', 'Producto multi-cliente'],
    image: '/investario.png',
    highlights: [
      'Registro y depreciación automática de activos fijos',
      'Trazabilidad por código QR generado por el sistema',
      'Arquitectura multi-cliente (multi-tenant) desde el diseño',
      'Celery Beat para tareas programadas de depreciación mensual',
      'API REST reutilizable desde la base del sistema de viáticos',
    ],
  },
];

export const stackGroups: StackGroup[] = [
  {
    category: 'Backend',
    items: ['Python', 'Django REST Framework', 'Celery + Redis'],
  },
  {
    category: 'Frontend',
    items: ['React.js', 'Next.js', 'TypeScript'],
  },
  {
    category: 'Datos & Infra',
    items: ['SQL Server', 'LDAP / Active Directory', 'Power BI'],
  },
  {
    category: 'Otros',
    items: ['Redacción de informes técnicos', 'Fundamentos de ciberseguridad', 'Apps de IA generativa'],
  },
];

export const formation: Formation = {
  education: [
    'Licenciatura en Ciencias Computacionales — UFHEC',
    'Fundamentos Técnicos del Computador — ITLA',
    'Introducción a la Programación — ITLA',
    'Servicios Auxiliares en Ciberseguridad — INFOTEP',
    'Calidad en el Servicio — INFOTEP',
  ],
  training: [
    'Power BI — Capacitación Kaliss',
    'Python — Udemy',
    'Cómo Crear una Página Web (WordPress) — Udemy',
    'Apps de IA Generativa: Transforma tu Trabajo — Coursera',
    'Las 5S · Gestión por Competencias · Redacción de Informes Técnicos · Seguridad y Salud Ocupacional',
  ],
};

export const perfilTags = [
  'Razonamiento lógico',
  'Capacidad analítica',
  'Resolución de problemas',
  'Gestión del tiempo',
  'Trabajo en equipo',
  'Empatía',
];

export interface Skill {
  name: string;
  level: number;
}

export const skills: Skill[] = [
  { name: 'Python / Django REST Framework', level: 82 },
  { name: 'SQL Server', level: 60 },
  { name: 'React.js / Next.js', level: 72 },
  { name: 'Power BI', level: 65 },
  { name: 'Celery + Redis', level: 40 },
];

export const languages: Skill[] = [
  { name: 'Español', level: 100 },
  { name: 'Inglés', level: 30 },
];

export const aptitudes = [
  'Razonamiento Lógico',
  'Capacidad Analítica',
  'Resolución de Problemas',
  'Gestión del Tiempo',
  'Trabajo en Equipo',
  'Empatía',
  'Habilidades Informáticas',
];

export const bootMessages = [
  '> iniciando wirjin.sys ...',
  '> cargando módulo perfil ... ok',
  '> verificando credenciales ... ok',
  '> montando sistemas en producción ... ok',
  '> listo.',
];

export const roleText =
  'Analista de Sistemas & Desarrollador Backend — Python / Django REST Framework / SQL Server, con frontend en React & Next.js';
