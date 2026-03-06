import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MasterDataModule } from './modules/master-data/master-data.module';
import { FinancialManagementModule } from './modules/financial-management/financial-management.module';
import { InventoryModule } from './modules/inventory/inventory.module';
import { SalesModule } from './modules/sales/sales.module';
import { TaxFiscalModule } from './modules/tax-fiscal/tax-fiscal.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_DATABASE || 'protheus_mock',
      autoLoadEntities: true,
      synchronize: true, 
    }),
    MasterDataModule,
    FinancialManagementModule,
    InventoryModule,
    SalesModule,
    TaxFiscalModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}