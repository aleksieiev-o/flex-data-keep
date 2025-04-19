import { z } from 'zod';

export const environmentSchema = z.object({
  apiKey: z.string().trim(),
  authDomain: z.string().trim(),
  databaseURL: z.string().trim().url(),
  projectId: z.string().trim(),
  messagingSenderId: z.string().trim(),
  appId: z.string().trim(),
  measurementId: z.string().trim().optional(),
});

export type EnvironmentSchema = z.infer<typeof environmentSchema>;
