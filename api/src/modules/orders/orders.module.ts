import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { SC5Entity } from './entities/sc5.entity';
import { SC6Entity } from './entities/sc6.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([SC5Entity, SC6Entity])
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
  exports: [OrdersService]
})
export class OrdersModule {}