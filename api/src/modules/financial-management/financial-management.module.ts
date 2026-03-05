import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FinancialManagementService } from './financial-management.service';
import { FinancialManagementController } from './financial-management.controller';
import { SE1Entity } from './entities/se1.entity';
import { SE2Entity } from './entities/se2.entity';

@Module({
  // O forFeature registra as entidades específicas deste módulo 
  imports: [TypeOrmModule.forFeature([SE1Entity, SE2Entity])],
  controllers: [FinancialManagementController],
  providers: [FinancialManagementService],
})
export class FinancialManagementModule {}