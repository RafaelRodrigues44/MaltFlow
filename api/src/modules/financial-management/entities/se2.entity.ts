import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { SA2Entity } from '../../master-data/entities/sa2.entity';

@Entity('SE2')
export class SE2Entity {
  @PrimaryColumn({ name: 'E2_NUM', type: 'varchar', length: 9 })
  numero: string;

  @Column({ name: 'E2_VALOR', type: 'decimal', precision: 12, scale: 2 })
  valor: number;

  @Column({ name: 'E2_VENCTO', type: 'date' })
  vencimento: Date;

  @ManyToOne(() => SA2Entity)
  @JoinColumn({ name: 'E2_FORNECE', referencedColumnName: 'codigo' })
  fornecedor: SA2Entity;
}