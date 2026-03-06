import { z } from 'zod';

export const SA2Schema = z.object({
  codigo: z.string().length(6),
  nome: z.string().min(3).max(40),
  estado: z.string().length(2),
  pais: z.string().length(3),
});

export type SA2Dto = z.infer<typeof SA2Schema>;