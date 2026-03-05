import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('SB1')
export class SB1Entity {
  @PrimaryColumn({ name: 'B1_COD', type: 'varchar', length: 15 })
  codigo: string;

  @Column({ name: 'B1_DESC', type: 'varchar', length: 60 })
  descricao: string;

  @Column({ name: 'B1_UM', type: 'varchar', length: 2, default: 'KG' })
  unidadeMedida: string;

  @Column({ name: 'B1_TIPO', type: 'varchar', length: 2, default: 'PA' })
  tipo: string; 
}