import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { SF2Entity } from '../../tax-fiscal/entities/sf2.entity';
import { SB1Entity } from '../../master-data/entities/sb1.entity';
import { z } from 'zod';

@Entity('SD2')
export class SD2Entity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'D2_DOC', type: 'varchar', length: 9 })
  numeroNota: string;

  @Column({ name: 'D2_SERIE', type: 'varchar', length: 3, default: '1' })
  serie: string;

  @Column({ name: 'D2_ITEM', type: 'varchar', length: 2 })
  item: string;

  @Column({ name: 'D2_COD', type: 'varchar', length: 15 })
  produtoCodigo: string;

  @Column({ name: 'D2_QUANT', type: 'decimal', precision: 12, scale: 2 })
  quantidade: number;

  @Column({ name: 'D2_PRCVUNIT', type: 'decimal', precision: 12, scale: 2 })
  precoUnitario: number;

  @Column({ name: 'D2_TOTAL', type: 'decimal', precision: 12, scale: 2 })
  valorTotal: number;

  @ManyToOne(() => SF2Entity)
  @JoinColumn({ name: 'D2_DOC', referencedColumnName: 'numero' })
  nota: SF2Entity;

  @ManyToOne(() => SB1Entity)
  @JoinColumn({ name: 'D2_COD' })
  produto: SB1Entity;
}

export const SalesOrderSchema = z.object({
  clienteCodigo: z.string().max(6),
  produtoCodigo: z.string().max(15),
  quantidade: z.number().positive(),
  valorUnitario: z.number().positive(),
});

export type SalesOrderDto = z.infer<typeof SalesOrderSchema>;