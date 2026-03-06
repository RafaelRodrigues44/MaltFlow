import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('SF2')
export class SF2Entity {
  @PrimaryColumn({ name: 'F2_DOC', type: 'varchar', length: 9 })
  numero: string;

  @Column({ name: 'F2_SERIE', type: 'varchar', length: 3 })
  serie: string;

  @Column({ name: 'F2_EMISSAO', type: 'date' })
  emissao: Date;

  @Column({ name: 'F2_VALTOT', type: 'decimal', precision: 12, scale: 2 })
  valorTotal: number;

  @Column({ name: 'F2_CLIENTE', type: 'varchar', length: 6 })
  clienteCodigo: string;
}