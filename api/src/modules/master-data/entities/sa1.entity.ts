import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('SA1')
export class SA1Entity {
  @PrimaryColumn({ name: 'A1_COD', type: 'varchar', length: 6 })
  codigo: string;

  @Column({ name: 'A1_NOME', type: 'varchar', length: 40 })
  nome: string;

  @Column({ name: 'A1_EST', type: 'varchar', length: 2 })
  estado: string;

  @Column({ name: 'A1_MUN', type: 'varchar', length: 60 })
  municipio: string;
}