import { Injectable, OnModuleInit, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { ZUREntity } from './entities/sys-user.entity';
import { UserRole } from './entities/user-role.enum';
import { CreateUserDto } from './dto/sys-user.schema';

@Injectable()
export class UsersService implements OnModuleInit {
  private readonly saltRounds = 10;

  constructor(
    @InjectRepository(ZUREntity)
    private readonly usersRepository: Repository<ZUREntity>,
  ) {}

  async onModuleInit() {
    await this.seedUsers();
  }

  getAvailableRoles(): string[] {
    return Object.values(UserRole);
  }

  async create(data: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(data.password, this.saltRounds);
    const newUser = this.usersRepository.create({
      ...data,
      password: hashedPassword,
    });
    return await this.usersRepository.save(newUser);
  }

  async findAll() {
    return await this.usersRepository.find({
      select: ['id', 'username', 'role', 'isActive'],
    });
  }

  async findOne(id: number): Promise<ZUREntity> {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) throw new NotFoundException('Usuário não encontrado');
    return user;
  }

  async findByUsername(username: string): Promise<ZUREntity | null> {
    return await this.usersRepository.findOne({ where: { username } });
  }

  private async seedUsers() {
    const count = await this.usersRepository.count();
    if (count === 0) {
      await this.create({
        username: 'admin',
        password: 'barley123',
        role: UserRole.ADMIN,
      });
    }
  }
}