import { z } from 'zod';

export const SB1Schema = z.object({
  codigo: z.string().max(15),
  descricao: z.string().min(5).max(60),
  unidadeMedida: z.string().length(2).default('KG'),
  tipo: z.string().length(2).default('PA'),
});

export type SB1Dto = z.infer<typeof SB1Schema>;