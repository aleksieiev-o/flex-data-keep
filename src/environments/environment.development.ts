import { EnvironmentSchema, environmentSchema } from './environmentSchema';

export const firebaseEnvironmentSchemaDev: EnvironmentSchema =
  environmentSchema.parse({
    apiKey: process.env['NG_APP_PUBLIC_FIREBASE_API_KEY'],
    authDomain: process.env['NG_APP_PUBLIC_FIREBASE_AUTH_DOMAIN'],
    databaseURL: process.env['NG_APP_PUBLIC_FIREBASE_DATABASE_URL'],
    projectId: process.env['NG_APP_PUBLIC_FIREBASE_PROJECT_ID'],
    messagingSenderId:
      process.env['NG_APP_PUBLIC_FIREBASE_MESSAGING_SENDER_ID'],
    appId: process.env['NG_APP_PUBLIC_FIREBASE_APP_ID'],
    // measurementId: process.env['NG_APP_PUBLIC_FIREBASE_MEASUREMENT_ID'],
  });
