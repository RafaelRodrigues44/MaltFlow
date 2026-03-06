import { z } from 'zod';

export const SF1Schema = z.object({
  numero: z.string().max(9, "O número da nota (F1_DOC) deve ter no máximo 9 caracteres"),
  serie: z.string().max(3, "A série (F1_SERIE) deve ter no máximo 3 caracteres"),
  emissao: z.string().transform((str) => new Date(str)),
  valorTotal: z.number().positive("O valor total da nota de entrada deve ser positivo"),
  fornecedorCodigo: z.string().length(6, "O código do fornecedor deve ter exatamente 6 caracteres"),
});

export type SF1Dto = z.infer<typeof SF1Schema>;