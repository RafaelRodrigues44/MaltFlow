import { z } from 'zod';

export const CreateOrderItemSchema = z.object({
  item: z.string().length(2),
  quantidade: z.number().positive(),
  precoUnitario: z.number().positive(),
  valorTotal: z.number().positive(),
  produtoCodigo: z.string().max(15)
});

export const CreateOrderSchema = z.object({
  numeroPedido: z.string().length(6),
  clienteCodigo: z.string().length(6),
  valorTotal: z.number().nonnegative(),
  itens: z.array(CreateOrderItemSchema).min(1)
});

export type CreateOrderDto = z.infer<typeof CreateOrderSchema>;