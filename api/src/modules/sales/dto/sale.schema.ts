import { z } from 'zod';

export const SalesOrderSchema = z.object({
  clienteCodigo: z.string().max(6), 
  produtoCodigo: z.string().max(15), 
  quantidade: z.number().positive(),
  valorUnitario: z.number().positive(),
});

export type SalesOrderDto = z.infer<typeof SalesOrderSchema>;