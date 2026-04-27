import { Injectable, signal, effect } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  isDark = signal<boolean>(false);

  constructor() {
    // Apply theme to <html> whenever signal changes
    effect(() => {
      document.documentElement.setAttribute(
        'data-theme',
        this.isDark() ? 'dark' : 'light'
      );
    });
  }

  toggle(): void {
    this.isDark.set(!this.isDark());
  }
}
