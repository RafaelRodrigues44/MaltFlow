import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './user.service';
import { UsersController } from './user.controller';
import { ZUREntity } from './entities/sys-user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ZUREntity])
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UserModule {}