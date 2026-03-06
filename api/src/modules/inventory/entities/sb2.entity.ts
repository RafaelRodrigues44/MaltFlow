import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { SB1Entity } from '../../master-data/entities/sb1.entity';

@Entity('SB2')
export class SB2Entity {
  @PrimaryColumn({ name: 'B2_COD', type: 'varchar', length: 15 })
  produtoCodigo: string;

  @PrimaryColumn({ name: 'B2_LOCAL', type: 'varchar', length: 2, default: '01' })
  local: string;

  @Column({ name: 'B2_QATU', type: 'decimal', precision: 12, scale: 2, default: 0 })
  quantidadeAtual: number;

  @Column({ name: 'B2_QMIN', type: 'decimal', precision: 12, scale: 2, default: 0 })
  estoqueMinimo: number;

  @ManyToOne(() => SB1Entity)
  @JoinColumn({ name: 'B2_COD' })
  produto: SB1Entity;
}