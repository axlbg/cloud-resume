import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../../services/portfolio-data.service';
import { Project, ProjectCategory } from '../../../models/portfolio.models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  activeFilter = signal<ProjectCategory>('cloud');

  constructor(public data: PortfolioDataService) {}

  setFilter(cat: ProjectCategory): void {
    this.activeFilter.set(cat);
  }

  get filtered(): Project[] {
    return this.data.projects.filter(p => p.category === this.activeFilter());
  }
}
