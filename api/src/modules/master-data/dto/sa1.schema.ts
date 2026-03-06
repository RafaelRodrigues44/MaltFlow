import { z } from 'zod';

export const SA1Schema = z.object({
  codigo: z.string().length(6),
  nome: z.string().min(3).max(40),
  estado: z.string().length(2),
  municipio: z.string().min(2),
});

export type SA1Dto = z.infer<typeof SA1Schema>;