import { Injectable } from '@angular/core';
import {
  NavItem, Project, TechGroup, WhatIDo,
  EduItem, CertItem, ContactRow, ExperienceItem
} from '../models/portfolio.models';

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {

  readonly navItems: NavItem[] = [
    { id: 'sobre-mi',    label: 'Sobre mí'    },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'proyectos',   label: 'Proyectos'   },
    { id: 'educacion',   label: 'Educación'   },
  ];

  readonly whatIDo: WhatIDo[] = [
    {
      title: 'Ciberseguridad',
      description: 'Analizo y respondo incidentes de seguridad, monitoreo alertas y administro firewalls, seguridad de correo e identidades en entornos corporativos.',
      icon: 'cybersec',
    },
    {
      title: 'Cloud Security',
      description: 'Diseño y aprovisiono infraestructura en AWS con la seguridad como punto de partida: gestión de accesos, segmentación de red y protección de datos.',
      icon: 'cloud',
    },
    {
      title: 'DevOps',
      description: 'Automatizo build, testing y despliegue con pipelines CI/CD, infraestructura como código y contenedores Docker.',
      icon: 'devops',
    },
    {
      title: 'Desarrollo Full Stack',
      description: 'Desarrollo aplicaciones web a medida para clientes, desde el relevamiento de requerimientos hasta su puesta en producción.',
      icon: 'code',
    },
  ];

  readonly experience: ExperienceItem[] = [
    {
      company: 'CTL Information Technology - Cliente: Personal',
      location: 'Argentina · Híbrido',
      roles: [
        {
          title: 'Analista de Ciberseguridad ',
          start: '2026-06',
          schedule: 'Jornada completa',
          highlights: [
            'Análisis de incidentes en Azure con Microsoft Defender y Microsoft Defender for Cloud Apps.',
            'Monitoreo de alarmas de seguridad.',
            'Monitoreo y administración de firewalls Fortinet y Cisco.',
            'Control de la seguridad del correo electrónico con FortiGuard y Microsoft Exchange.',
            'Resolución de incidentes de usuarios en Active Directory, doble factor (CyberArk Identity, Idira) y bases de datos Oracle.',
          ],
          stack: ['Microsoft Defender', 'Defender for Cloud Apps', 'Fortinet', 'Cisco', 'Active Directory', 'CyberArk', 'Oracle'],
        },
      ],
    },
    {
      company: 'Freelance',
      roles: [
        {
          title: 'Consultor Cloud & DevOps',
          start: '2026-09',
          highlights: [
            'Análisis de requerimientos del cliente y traducción a arquitecturas de infraestructura.',
            'Diseño y aprovisionamiento de infraestructura y seguridad en AWS.',
            'Implementación de pipelines CI/CD para build, testing y despliegue automatizado.',
            'Contenerización de aplicaciones con Docker y gestión de despliegues en producción.',
            'Participación en el desarrollo de un sistema interno.',
          ],
          stack: ['AWS', 'Terraform', 'CloudFormation', 'Docker', 'GitHub Actions', 'Linux'],
        },
        {
          title: 'Desarrollador Full Stack',
          start: '2023-08',
          end: '2026-09',
          highlights: [
            'Desarrollo end-to-end de aplicaciones web, hasta su despliegue en producción.',
            'Relevamiento de requerimientos con clientes, traducción a funcionalidades concretas y entrega de soluciones.',
            'Autenticación con JWT y OAuth 2.0.',
            'Integración de Firebase y Supabase (auth, base de datos, APIs).',
            'Diseño e implementación de bases de datos PostgreSQL.',
          ],
          stack: ['Angular', 'Ionic', 'Spring Boot', 'Node.js', 'React', 'Next.js', 'PostgreSQL'],
        },
      ],
    },
  ];

  readonly techGroups: TechGroup[] = [
    {
      label: 'Seguridad', category: 'security',
      chips: [
        { name: 'Microsoft Defender',      icon: 'check' },
        { name: 'Defender for Cloud Apps', icon: 'check' },
        { name: 'Fortinet',                icon: 'https://cdn.simpleicons.org/fortinet/EE3124' },
        { name: 'Cisco',                   icon: 'https://cdn.simpleicons.org/cisco/1BA0D7'    },
        { name: 'Active Directory',        icon: 'check' },
        { name: 'CyberArk',                icon: 'check' },
        { name: 'MFA',                     icon: 'check' },
      ],
    },
    {
      label: 'Cloud', category: 'cloud',
      chips: [
        { name: 'S3',          icon: 'assets/icons/aws/Arch_Amazon-Simple-Storage-Service_64.svg'          },
        { name: 'IAM',         icon: 'assets/icons/aws/Arch_AWS-Identity-and-Access-Management_64.svg'     },
        { name: 'DynamoDB',    icon: 'assets/icons/aws/Arch_Amazon-DynamoDB_64.svg'                        },
        { name: 'EC2',         icon: 'assets/icons/aws/Arch_Amazon-EC2_64.svg'                             },
        { name: 'Lambda',      icon: 'assets/icons/aws/Arch_AWS-Lambda_64.svg'                             },
        { name: 'VPC',         icon: 'assets/icons/aws/Arch_Amazon-Virtual-Private-Cloud_64.svg'           },
        { name: 'CloudFront',  icon: 'assets/icons/aws/Arch_Amazon-CloudFront_64.svg'                      },
        { name: 'API Gateway', icon: 'assets/icons/aws/Arch_Amazon-API-Gateway_64.svg'                     },
        { name: 'Route 53',    icon: 'assets/icons/aws/Arch_Amazon-Route-53_64.svg'                        },
        { name: 'AWS CLI',     icon: 'assets/icons/aws/Arch_AWS-CloudShell_64.svg'                         },
        { name: 'Azure',       icon: 'check' },
      ],
    },
    {
      label: 'DevOps & IaC', category: 'devops',
      chips: [
        { name: 'Terraform',      icon: 'https://cdn.simpleicons.org/terraform/7B42BC'     },
        { name: 'CloudFormation', icon: 'check' },
        { name: 'Docker',         icon: 'https://cdn.simpleicons.org/docker/2496ED'        },
        { name: 'GitHub Actions', icon: 'https://cdn.simpleicons.org/githubactions/2088FF' },
        { name: 'Linux',          icon: 'https://cdn.simpleicons.org/linux/FCC624'         },
        { name: 'Networking',     icon: 'check' },
      ],
    },
    {
      label: 'Desarrollo', category: 'fullstack',
      chips: [
        { name: 'TypeScript',  icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
        { name: 'Java',        icon: 'https://cdn.simpleicons.org/openjdk/007396'    },
        { name: 'Python',      icon: 'https://cdn.simpleicons.org/python/3776AB'     },
        { name: 'Bash',        icon: 'https://cdn.simpleicons.org/gnubash/4EAA25'    },
        { name: 'Angular',     icon: 'https://cdn.simpleicons.org/angular/DD0031'    },
        { name: 'React',       icon: 'https://cdn.simpleicons.org/react/61DAFB'      },
        { name: 'Spring Boot', icon: 'https://cdn.simpleicons.org/springboot/6DB33F' },
        { name: 'Node.js',     icon: 'https://cdn.simpleicons.org/nodedotjs/5FA04E'  },
      ],
    },
    {
      label: 'Bases de datos', category: 'database',
      chips: [
        { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
        { name: 'MySQL',      icon: 'https://cdn.simpleicons.org/mysql/4479A1'      },
        { name: 'MongoDB',    icon: 'https://cdn.simpleicons.org/mongodb/47A248'    },
        { name: 'Oracle',     icon: 'check' },
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
