import { Module } from '@nestjs/common';
import { TaxFiscalService } from './tax-fiscal.service';
import { TaxFiscalController } from './tax-fiscal.controller';

@Module({
  controllers: [TaxFiscalController],
  providers: [TaxFiscalService],
})
export class TaxFiscalModule {}
