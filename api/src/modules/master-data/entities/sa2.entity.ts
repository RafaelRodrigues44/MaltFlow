import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('SA2')
export class SA2Entity {
  @PrimaryColumn({ name: 'A2_COD', type: 'varchar', length: 6 })
  codigo: string;

  @Column({ name: 'A2_NOME', type: 'varchar', length: 40 })
  nome: string;

  @Column({ name: 'A2_EST', type: 'varchar', length: 2 })
  estado: string;

  @Column({ name: 'A2_PAIS', type: 'varchar', length: 3 })
  pais: string; 
}