import { z } from 'zod';

export const SB2Schema = z.object({
  produtoCodigo: z.string().max(15),
  local: z.string().length(2).default('01'),
  quantidadeAtual: z.number().min(0),
  estoqueMinimo: z.number().min(0),
});

export type SB2Dto = z.infer<typeof SB2Schema>;