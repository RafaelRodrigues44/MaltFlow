import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { SC6Entity } from './sc6.entity';

@Entity('SC5')
export class SC5Entity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'C5_NUM', type: 'varchar', length: 6, unique: true })
  numeroPedido: string;

  @Column({ name: 'C5_CLIENTE', type: 'varchar', length: 6 })
  clienteCodigo: string;

  @Column({ name: 'C5_STATUS', type: 'varchar', length: 1, default: '1' })
  status: string;

  @Column({ name: 'C5_VLTOT', type: 'decimal', precision: 12, scale: 2, default: 0 })
  valorTotal: number;

  @CreateDateColumn({ name: 'C5_EMISSAO' })
  dataEmissao: Date;

  @OneToMany(() => SC6Entity, (item) => item.pedido)
  itens: SC6Entity[];
}