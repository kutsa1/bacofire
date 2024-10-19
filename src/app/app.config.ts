import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {environment} from '../environments/environment';
import {FIREBASE_OPTIONS} from '@angular/fire/compat';
import {getAuth, provideAuth} from '@angular/fire/auth';



export const appConfig: ApplicationConfig = {
  providers: [
    provideAuth(() => getAuth()),
    { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig },
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
  ]
};
