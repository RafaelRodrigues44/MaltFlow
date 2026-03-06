import { z } from 'zod';

export const SF2Schema = z.object({
  numero: z.string().max(9),
  serie: z.string().max(3),
  emissao: z.string().transform((str) => new Date(str)),
  valorTotal: z.number().positive(),
  clienteCodigo: z.string().length(6),
});

export type SF2Dto = z.infer<typeof SF2Schema>;