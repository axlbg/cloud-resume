import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  opacity = 1;
  translateY = 0;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onScroll(): void {
    const h = this.el.nativeElement.offsetHeight || 120;
    const ratio = Math.min(window.scrollY / (h * 0.75), 1);
    this.opacity    = 1 - ratio;
    this.translateY = -ratio * 14;
  }
}
