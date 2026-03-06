import { z } from 'zod';

export const SD2Schema = z.object({
  numeroNota: z.string().max(9),
  serie: z.string().max(3).default('1'),
  item: z.string().max(2),
  produtoCodigo: z.string().max(15),
  quantidade: z.number().positive(),
  precoUnitario: z.number().positive(),
  valorTotal: z.number().positive(),
});

export type SD2Dto = z.infer<typeof SD2Schema>;