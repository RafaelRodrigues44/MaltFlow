import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { SC5Entity } from './sc5.entity';
import { SB1Entity } from '../../master-data/entities/sb1.entity';

@Entity('SC6')
export class SC6Entity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'C6_ITEM', type: 'varchar', length: 2 })
  item: string;

  @Column({ name: 'C6_QTD', type: 'decimal', precision: 12, scale: 2 })
  quantidade: number;

  @Column({ name: 'C6_PRUNIT', type: 'decimal', precision: 12, scale: 2 })
  precoUnitario: number;

  @Column({ name: 'C6_VALOR', type: 'decimal', precision: 12, scale: 2 })
  valorTotal: number;

  @ManyToOne(() => SC5Entity, (pedido) => pedido.itens)
  @JoinColumn({ name: 'C6_NUMID' })
  pedido: SC5Entity;

  @ManyToOne(() => SB1Entity)
  @JoinColumn({ name: 'C6_PRODUTO', referencedColumnName: 'codigo' })
  produto: SB1Entity;

  @Column({ name: 'C6_PRODUTO', type: 'varchar', length: 15 })
  produtoCodigo: string;
}