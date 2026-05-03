import { Injectable } from '@angular/core';
import {
  NavItem, Project, TechGroup, WhatIDo,
  EduItem, CertItem, ContactRow
} from '../models/portfolio.models';

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {

  readonly navItems: NavItem[] = [
    { id: 'sobre-mi',  label: 'Sobre mí'  },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'educacion', label: 'Educación' },
  ];

  readonly whatIDo: WhatIDo[] = [
    {
      title: 'Cloud & AWS',
      description: 'Construyo y despliego soluciones en AWS, explorando servicios clave y buenas prácticas de arquitectura cloud.',
      icon: 'cloud',
    },
    {
      title: 'DevOps',
      description: 'Aplico prácticas de CI/CD, automatización y gestión de entornos para mejorar procesos de desarrollo.',
      icon: 'devops',
    },
    {
      title: 'Ciberseguridad',
      description: 'Aplico buenas prácticas de seguridad en sistemas y aplicaciones, incluyendo gestión de accesos, protección de datos y comprensión de vulnerabilidades comunes.',
      icon: 'cybersec',
    },
    {
      title: 'Desarrollo Full Stack',
      description: 'Desarrollo soluciones tanto para proyectos personales como para necesidades específicas.',
      icon: 'code',
    },
  ];

  
 readonly techGroups: TechGroup[] = [
  {
    label: 'AWS', category: 'cloud',
    chips: [
      { name: 'S3',     icon: 'assets/icons/aws/Arch_Amazon-Simple-Storage-Service_64.svg'     },
      { name: 'IAM',    icon: 'assets/icons/aws/Arch_AWS-Identity-and-Access-Management_64.svg'    },
      { name: 'DynamoDB',    icon: 'assets/icons/aws/Arch_Amazon-DynamoDB_64.svg'    },
      { name: 'EC2',    icon: 'assets/icons/aws/Arch_Amazon-EC2_64.svg'    },
      { name: 'Lambda', icon: 'assets/icons/aws/Arch_AWS-Lambda_64.svg' },
      { name: 'VPC',    icon: 'assets/icons/aws/Arch_Amazon-Virtual-Private-Cloud_64.svg'    },
      { name: 'CloudFront',    icon: 'assets/icons/aws/Arch_Amazon-CloudFront_64.svg'    },
      { name: 'API Gateway',    icon: 'assets/icons/aws/Arch_Amazon-API-Gateway_64.svg'    },
      { name: 'Route 53',    icon: 'assets/icons/aws/Arch_Amazon-Route-53_64.svg'    },
      { name: 'AWS CLI',    icon: 'assets/icons/aws/Arch_AWS-CloudShell_64.svg'    },
    ],
  },
  {
    label: 'DevOps', category: 'devops',
    chips: [
      { name: 'Linux',          icon: 'https://cdn.simpleicons.org/linux/FCC624'          },
      { name: 'Networking',     icon: 'https://cdn.simpleicons.org/cisco/1BA0D7'          },
      { name: 'Docker',         icon: 'https://cdn.simpleicons.org/docker/2496ED'         },
      { name: 'GitHub Actions', icon: 'https://cdn.simpleicons.org/githubactions/2088FF' },
      { name: 'CI/CD',          icon: 'https://cdn.simpleicons.org/githubactions/2088FF' },
      { name: 'IaC',            icon: 'https://cdn.simpleicons.org/terraform/7B42BC'      },
    ],
  },
  {
    label: 'Bases de datos', category: 'database',
    chips: [
      { name: 'MongoDB',    icon: 'https://cdn.simpleicons.org/mongodb/47A248'   },
      { name: 'MySQL',      icon: 'https://cdn.simpleicons.org/mysql/4479A1'     },
      { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1'},
    ],
  },
  {
    label: 'Programación', category: 'fullstack',
    chips: [
      { name: 'JavaScript',    icon: 'https://cdn.simpleicons.org/javascript'     },
      { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6'  },
      { name: 'Java',       icon: 'https://cdn.simpleicons.org/openjdk/007396'     },
      { name: 'Python',     icon: 'https://cdn.simpleicons.org/python/3776AB'      },
      { name: 'Bash',     icon: 'https://cdn.simpleicons.org/gnubash/4EAA25'      },
    ],
  },
];

  readonly projects: Project[] = [
    // Cloud
    { title: 'AWS Cloud Portfolio', category: 'cloud',
      description: 'Frontend con despliegue automático en S3 con CloudFront, fecha de la última actualización consultada desde DynamoDB vía Lambda.',
      stack: ['S3', 'Lambda', 'DynamoDB', 'CloudFront', 'IaC', 'GitHub Actions', 'Python'],
      githubUrl: 'https://github.com/axlbg/cloud-resume' },
    // Fullstack
    { title: 'Workout Tracker', category: 'fullstack',
      description: 'App para registrar y seguir rutinas de entrenamiento con historial y métricas de progreso.',
      stack: ['Angular', 'Spring Boot', 'PostgreSQL'],
      githubUrl: 'https://github.com/axlbg/workout-tracker',
      liveUrl: 'https://workout-tracker-amber.vercel.app/home' },

    { title: 'URL Shortening', category: 'fullstack',
      description: 'Servicio de acortamiento de URLs con panel de estadísticas de clics y redirección dinámica.',
      stack: ['React', 'Spring Boot', 'PostgreSQL'],
      githubUrl: 'https://github.com/axlbg/URL-Shortening',
      liveUrl: 'https://url-shortening-topaz.vercel.app/' },

    { title: 'Take notes!', category: 'fullstack',
      description: 'Aplicación web que permite administrar notas, pudiendo crear, borrar, modificar, archivar y más.',
      stack: ['Angular', 'NestJS', 'PostgreSQL'],
      githubUrl: 'https://github.com/axlbg/Take-notes-app',
      liveUrl: 'https://take-notes-app-ten.vercel.app/' },

    /*{ title: 'Esquina Piñeiro', category: 'fullstack',
      description: 'Sitio web y carta digital para local gastronómico con gestión de menú.',
      stack: ['Angular', 'Typescript'],
      githubUrl: 'https://github.com/axlbg/Esquina-Pineiro',
      liveUrl: 'https://esquina-pineiro.web.app' },
*/
    { title: 'Tienda deportiva', category: 'fullstack',
      description: 'Frontend demo para tienda deportiva. Cuenta con carrito de compras y productos en catálogo JSON, responsive, filtros de búsqueda y más.',
      stack: ['Angular', 'Typescript'],
      githubUrl: 'https://github.com/axlbg/adudas',
      liveUrl: 'https://adudas-4ab4b.firebaseapp.com/' },
  ];

  readonly education: EduItem[] = [
    {
      years: '2022 – 2025',
      degree: 'Tecnicatura Universitaria en Programación',
      institution: 'Universidad Tecnológica Nacional — Argentina',
    },
    
    {
      years: '2025',
      degree: 'DevOps, integración y agilidad continua',
      institution: 'Centro de e-Learning UTN FRBA',
    },
  ];

readonly certifications: CertItem[] = [
  {
  abbr: 'AWS',
  name: 'AWS Certified Solutions Architect Associate (SAA-C03)',
  issuer: 'Amazon Web Services',
  year: 'En preparación'
},
  {
    abbr: 'AWS',
    name: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services',
    year: '2026'
  },  {
    abbr: 'CNA',
    name: 'Networking Basics',
    issuer: 'Cisco Networking Academy',
    year: '2026'
  },
  {
    abbr: 'CC',
    name: 'Certified in Cybersecurity (CC)',
    issuer: 'ISC2',
    year: '2024'
  },
  {
    abbr: 'GCC',
    name: 'Google Cybersecurity Certificate',
    issuer: 'Google',
    year: '2024'
  }
];

  readonly contacts: ContactRow[] = [
    { type: 'github',   label: '/axlbg',                 handle: 'github.com/axlbg',            href: 'https://github.com/axlbg'            },
    { type: 'linkedin', label: '/axelbguzman',            handle: 'linkedin.com/in/axelbguzman', href: 'https://linkedin.com/in/axelbguzman' },
    { type: 'email',    label: 'axelguzmandev@gmail.com', handle: 'Email',               href: 'mailto:axelguzmandev@gmail.com'      },
  ];
}
