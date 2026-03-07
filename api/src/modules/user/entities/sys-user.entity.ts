import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { UserRole } from './user-role.enum';

@Entity('ZUR')
export class ZUREntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.SALES, 
  })
  role: UserRole;

  @Column({ default: true })
  isActive: boolean;
}