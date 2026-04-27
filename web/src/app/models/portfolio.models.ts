export type Section = 'sobre-mi' | 'proyectos' | 'educacion';
export type ProjectCategory = 'cloud' | 'fullstack';
export type TechCategory = 'cloud' | 'devops' | 'fullstack' | 'database';

export interface NavItem {
  id: Section;
  label: string;
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  category: ProjectCategory;
  githubUrl?: string;  
  liveUrl?: string;  
}

export interface TechChip {
  name: string;
  icon: string;
}

export interface TechGroup {
  label: string;
  category: TechCategory;
  chips: TechChip[];
}

export interface WhatIDo {
  title: string;
  description: string;
  icon: 'devops' | 'cloud' | 'cybersec' | 'code';
}

export interface EduItem {
  years: string;
  degree: string;
  institution: string;
  graduated?: boolean;
}

export interface CertItem {
  abbr: string;
  name: string;
  issuer: string;
  year: string;
}

export interface ContactRow {
  type: 'github' | 'linkedin' | 'email';
  label: string;
  handle: string;
  href: string;
}
