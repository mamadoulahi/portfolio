export const profile = {
  firstName: 'Mamadou',
  lastName: 'Keita',
  fullName: 'Mamadou Keita',
  logo: 'MK',
  role: 'Développeur Fullstack',
  tagline:
    "J'excelle dans la conception et le développement d'applications alliant interfaces intuitives et systèmes performants.",
  aboutSubtitle: 'Frontend, Mobile, Fullstack & Intégration UI/UX',
  about:
    "Je suis développeur fullstack, avec une forte sensibilité frontend, mobile et UI/UX. Fort d'expériences variées, je maîtrise l'intégration de maquettes, la création d'interfaces réactives et le développement d'applications web et mobiles complètes. Curieux et méthodique, je conçois des solutions adaptées aux besoins des utilisateurs, de l'intégration Figma jusqu'aux architectures backend.",
  email: 'keitamamadoulahi@gmail.com',
  phone: '+221 78 367 21 62',
  phoneHref: 'tel:+221783672162',
  location: 'Dakar, Sénégal',
  cvPath: '/cv/Mamadou_Keita_CV.pdf',
  available: true,
} as const

export const socials = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/mamadoukeita',
    icon: 'linkedin',
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/mamadoukeita',
    icon: 'github',
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:keitamamadoulahi@gmail.com',
    icon: 'mail',
  },
] as const

export const navLinks = [
  { id: 'home', label: 'Accueil', href: '#home' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'about', label: 'À propos', href: '#about' },
  { id: 'portfolio', label: 'Projets', href: '#portfolio' },
  { id: 'contact', label: 'Contact', href: '#contact' },
] as const

/** Stats derived from real career timeline (2021 → today) and listed projects — no invented client counts. */
export const stats = [
  { value: '4+', label: 'Années d’expérience' },
  { value: '6+', label: 'Projets réalisés' },
  { value: '6', label: 'Expériences pro.' },
] as const

export const services = [
  {
    title: 'Développement Frontend',
    description:
      'Interfaces modernes et accessibles avec React, Angular, TypeScript, HTML/CSS et Tailwind CSS.',
    icon: 'frontend',
  },
  {
    title: 'Applications Mobile',
    description:
      'Applications cross-platform avec Flutter, géolocalisation, notifications et intégration Firebase.',
    icon: 'mobile',
  },
  {
    title: 'Intégration UI/UX',
    description:
      'Transformation de maquettes Figma en interfaces fidèles, responsives et prêtes pour la production.',
    icon: 'design',
  },
  {
    title: 'Développement Fullstack',
    description:
      'Applications complètes reliant frontend, APIs REST et backends Spring Boot ou NestJS.',
    icon: 'fullstack',
  },
  {
    title: 'Prototypage & Design System',
    description:
      'Wireframes, prototypage et structuration d’interfaces cohérentes pour accélérer les itérations produit.',
    icon: 'prototype',
  },
  {
    title: 'APIs & Données',
    description:
      'Intégration de services, optimisation des flux et solutions data adaptées aux besoins métier.',
    icon: 'api',
  },
] as const

/** Skill rings for tools confirmed by experience — ring fill is decorative, not a mastery score. */
export const skills = [
  { name: 'React', level: 100, icon: 'react' },
  { name: 'Angular', level: 100, icon: 'angular' },
  { name: 'Flutter', level: 100, icon: 'flutter' },
  { name: 'Figma', level: 100, icon: 'figma' },
  { name: 'Spring Boot', level: 100, icon: 'spring' },
] as const

export type ProjectCategory = 'all' | 'web' | 'mobile' | 'desktop' | 'data'

export const projectFilters: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'Tous' },
  { id: 'web', label: 'Sites web' },
  { id: 'mobile', label: 'Apps mobile' },
  { id: 'desktop', label: 'Apps desktop' },
  { id: 'data', label: 'Data & IA' },
]

export const projects = [
  {
    id: 'livestock',
    title: 'Analyse du marché de bétail au Sénégal',
    category: 'data' as ProjectCategory,
    featured: true,
    problem:
      'Aider le MEPA à obtenir une vision complète des marchés de bétail et prédire le nombre de ventes par espèce.',
    features: [
      'Prédiction des ventes par espèce',
      'Tableaux de bord analytiques',
      'Exploitation de données marché',
    ],
    role: 'Développeur — analyse, backend et restitution data',
    stack: ['Flask', 'Power BI', 'Python', 'Excel'],
    demoUrl: null,
    repoUrl: null,
  },
  {
    id: 'roadside-mobile',
    title: 'Application d’assistance routière',
    category: 'mobile' as ProjectCategory,
    featured: true,
    problem:
      'Offrir une assistance routière en temps réel avec géolocalisation et notifications push.',
    features: [
      'Géolocalisation en temps réel',
      'Notifications push',
      'Suivi des interventions',
    ],
    role: 'Développeur mobile & intégration backend',
    stack: ['Flutter', 'Firebase', 'NestJS', 'Figma'],
    demoUrl: null,
    repoUrl: null,
  },
  {
    id: 'roadside-admin',
    title: 'Administration assistance routière',
    category: 'web' as ProjectCategory,
    featured: false,
    problem:
      'Gérer utilisateurs, interventions et véhicules en panne côté back-office.',
    features: [
      'Gestion des utilisateurs',
      'Suivi des interventions',
      'Gestion des véhicules',
    ],
    role: 'Développeur frontend',
    stack: ['Angular', 'Angular Material', 'Figma'],
    demoUrl: null,
    repoUrl: null,
  },
  {
    id: 'loan',
    title: 'Application de prêt en ligne',
    category: 'mobile' as ProjectCategory,
    featured: true,
    problem:
      'Permettre la soumission de demandes de crédit avec gestion automatisée des paiements.',
    features: [
      'Demandes de crédit',
      'Gestion des paiements',
      'Calcul des taux d’intérêt',
    ],
    role: 'Développeur fullstack mobile',
    stack: ['Flutter', 'Spring Boot', 'Figma', 'AWS', 'Docker'],
    demoUrl: null,
    repoUrl: null,
  },
  {
    id: 'taxes',
    title: 'Gestion de taxes municipales',
    category: 'desktop' as ProjectCategory,
    featured: false,
    problem:
      'Aider les mairies à gérer la collecte des taxes et tracer les opérations contribuable / agent.',
    features: [
      'Collecte des taxes',
      'Traçabilité des opérations',
      'Suivi contribuable / agent',
    ],
    role: 'Développeur',
    stack: ['Application métier'],
    demoUrl: null,
    repoUrl: null,
  },
  {
    id: 'ecommerce',
    title: 'Application e-commerce',
    category: 'mobile' as ProjectCategory,
    featured: false,
    problem:
      'Application mobile d’achat et vente consommant une API REST WordPress.',
    features: [
      'Parcours d’achat',
      'Publication d’articles',
      'Consommation API REST',
    ],
    role: 'Développeur mobile',
    stack: ['Android', 'WordPress', 'API REST'],
    demoUrl: null,
    repoUrl: null,
  },
] as const

export const experiences = [
  {
    title: 'Développement Frontend & Mobile',
    company: 'Gainde Talent Provider',
    period: 'Août 2025 – Aujourd’hui',
    location: 'Fann Hock',
    points: [
      'Développement d’interfaces utilisateur modernes et réactives',
      'Création d’applications mobiles cross-platform',
      'Collaboration avec les équipes design et backend',
    ],
  },
  {
    title: 'Stage Développeur Front-End',
    company: 'Orbus Digital Service',
    period: 'Avril 2025 – Juillet 2025',
    location: 'Point E',
    points: [
      'Développement d’interfaces avec des technologies modernes',
      'Intégration de maquettes Figma en composants React/Angular',
      'Participation aux revues de code et méthodologies agiles',
    ],
  },
  {
    title: 'Développeur FullStack',
    company: 'Eng Technologie Group',
    period: 'Août 2023 – Décembre 2024',
    location: 'Sicap Baobab',
    points: [
      'Conception et développement d’applications web et mobiles',
      'Architectures backend avec Spring Boot',
      'Interfaces réactives avec Angular et Flutter',
    ],
  },
  {
    title: 'Développeur FullStack',
    company: 'Gm4tech',
    period: 'Mars 2023 – Avril 2023',
    location: 'Télétravail',
    points: [
      'Développement de solutions techniques sur mesure',
      'Travail en équipe distribuée en méthodologie agile',
    ],
  },
  {
    title: 'Assistant Développeur',
    company: 'Wallou Suarl',
    period: 'Décembre 2021 – Février 2023',
    location: 'Télétravail',
    points: [
      'Participation au développement de solutions logicielles',
      'Maintenance et évolution des applications existantes',
      'Collaboration avec l’équipe design pour les interfaces',
    ],
  },
  {
    title: 'Stage Développement Web',
    company: 'Ministère de l’Enseignement Supérieur',
    period: 'Septembre 2021 – Octobre 2021',
    location: 'Diamniadio',
    points: [
      'Développement d’une plateforme interne de gestion',
      'Initiation aux bonnes pratiques de développement',
    ],
  },
] as const

export const education = {
  title: 'BTS — Analyse de Performance Digitale',
  school: 'ISEP Amadou Trawaré',
  period: '2019 – 2021',
  location: 'Diamniadio',
} as const

export const serviceOptions = [
  'Développement Frontend',
  'Applications Mobile',
  'Intégration UI/UX',
  'Développement Fullstack',
  'Prototypage & Design System',
  'APIs & Données',
  'Autre',
] as const
