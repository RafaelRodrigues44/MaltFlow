import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('SF1')
export class SF1Entity {
  @PrimaryColumn({ name: 'F1_DOC', type: 'varchar', length: 9 })
  numero: string;

  @Column({ name: 'F1_SERIE', type: 'varchar', length: 3 })
  serie: string;

  @Column({ name: 'F1_EMISSAO', type: 'date' })
  emissao: Date;

  @Column({ name: 'F1_VALTOT', type: 'decimal', precision: 12, scale: 2 })
  valorTotal: number;

  @Column({ name: 'F1_FORNECE', type: 'varchar', length: 6 })
  fornecedorCodigo: string;
}