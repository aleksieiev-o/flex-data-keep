import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(),
    provideEffects(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'data-meter-keep-d7da6',
        appId: '1:108837005103:web:5873852ccb912e4e7f63da',
        databaseURL:
          'https://data-meter-keep-d7da6-default-rtdb.europe-west1.firebasedatabase.app',
        storageBucket: 'data-meter-keep-d7da6.appspot.com',
        apiKey: 'AIzaSyAqvFa0qcusDbqfuftu4-R31Y_eT4Xi9_w',
        authDomain: 'data-meter-keep-d7da6.firebaseapp.com',
        messagingSenderId: '108837005103',
      }),
    ),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
  ],
};
