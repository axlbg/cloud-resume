import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { Section } from '../../models/portfolio.models';
import { AboutComponent } from '../sections/about/about.component';
import { ProjectsComponent } from '../sections/projects/projects.component';
import { EducationComponent } from '../sections/education/education.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, AboutComponent, ProjectsComponent, EducationComponent, ContactComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  activeSection = signal<Section>('sobre-mi');
  scrolled = false;

  constructor(
    public theme: ThemeService,
    public data: PortfolioDataService,
  ) {}

  @HostListener('window:scroll', [])
  onScroll(): void { this.scrolled = window.scrollY > 8; }

  navigate(section: Section): void { this.activeSection.set(section); }
}
