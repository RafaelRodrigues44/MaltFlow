import { z } from 'zod';

export const SE2Schema = z.object({
  numero: z.string().max(9),
  valor: z.number().positive("O valor do título deve ser maior que zero"),
  vencimento: z.string().transform((str) => new Date(str)),
  fornecedorCodigo: z.string().length(6, "O código do fornecedor deve ter 6 caracteres"),
});

export type SE2Dto = z.infer<typeof SE2Schema>;