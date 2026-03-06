import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SD2Entity } from './entities/sd2.entity';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';
import { InventoryModule } from '../inventory/inventory.module';
import { TaxFiscalModule } from '../tax-fiscal/tax-fiscal.module';
import { FinancialManagementModule } from '../financial-management/financial-management.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([SD2Entity]),
    InventoryModule,
    TaxFiscalModule,
    FinancialManagementModule,
  ],
  controllers: [SalesController],
  providers: [SalesService],
  exports: [SalesService],
})
export class SalesModule {}