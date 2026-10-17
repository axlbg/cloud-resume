import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../../services/portfolio-data.service';
import { ExperienceRole } from '../../../models/portfolio.models';

const MONTHS = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sept', 'Oct', 'Nov', 'Dic'];

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  constructor(public data: PortfolioDataService) {}

  period(role: ExperienceRole): string {
    return `${this.formatMonth(role.start)} – ${role.end ? this.formatMonth(role.end) : 'Actualidad'}`;
  }

  // Cuenta meses inclusivos, igual que LinkedIn (jun–oct = 5 meses)
  duration(role: ExperienceRole): string {
    const [sy, sm] = role.start.split('-').map(Number);
    const end = role.end ? role.end.split('-').map(Number) : [new Date().getFullYear(), new Date().getMonth() + 1];
    const total = (end[0] - sy) * 12 + (end[1] - sm) + 1;
    const years = Math.floor(total / 12);
    const months = total % 12;
    const parts: string[] = [];
    if (years)  parts.push(`${years} ${years === 1 ? 'año' : 'años'}`);
    if (months) parts.push(`${months} ${months === 1 ? 'mes' : 'meses'}`);
    return parts.join(' ');
  }

  private formatMonth(ym: string): string {
    const [y, m] = ym.split('-').map(Number);
    return `${MONTHS[m - 1]} ${y}`;
  }
}
