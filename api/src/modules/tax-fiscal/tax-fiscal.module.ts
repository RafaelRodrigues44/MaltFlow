import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SF1Entity } from './entities/sF1.entity';
import { SF2Entity } from './entities/sf2.entity';
import { TaxFiscalService } from './tax-fiscal.service';
import { TaxFiscalController } from './tax-fiscal.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([SF1Entity, SF2Entity]),
  ],
  controllers: [TaxFiscalController],
  providers: [TaxFiscalService],
  exports: [TaxFiscalService],
})
export class TaxFiscalModule {}