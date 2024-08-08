import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import { provideHttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    FormsModule, provideAnimationsAsync(),
    MatButtonModule, 
    MatSnackBarModule,
    HttpClient,
    MatTableModule, provideAnimationsAsync(),
    MatCardModule
  ],
};

