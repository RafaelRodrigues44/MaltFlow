import { z } from 'zod';

export const SE1Schema = z.object({
  numero: z.string().max(9),
  valor: z.number().positive(),
  vencimento: z.string().transform((str) => new Date(str)),
  clienteCodigo: z.string().length(6),
});

export type SE1Dto = z.infer<typeof SE1Schema>;