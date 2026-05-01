import { ApplicationConfig } from '@angular/core';

import localeEs from '@angular/common/locales/es';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';

registerLocaleData(localeEs);

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    { provide: LOCALE_ID, useValue: 'es' }
  ]
};