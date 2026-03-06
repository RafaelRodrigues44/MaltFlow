import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { SA1Entity } from '../../master-data/entities/sa1.entity';

@Entity('SE1')
export class SE1Entity {
  @PrimaryColumn({ name: 'E1_NUM', type: 'varchar', length: 9 })
  numero: string;

  @Column({ name: 'E1_VALOR', type: 'decimal', precision: 12, scale: 2 })
  valor: number;

  @Column({ name: 'E1_VENCTO', type: 'date' })
  vencimento: Date;

  @ManyToOne(() => SA1Entity)
  @JoinColumn({ name: 'E1_CLIENTE', referencedColumnName: 'codigo' })
  cliente: SA1Entity;
}