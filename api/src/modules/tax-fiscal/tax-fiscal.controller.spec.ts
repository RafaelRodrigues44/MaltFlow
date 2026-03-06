import { Test, TestingModule } from '@nestjs/testing';
import { TaxFiscalController } from './tax-fiscal.controller';
import { TaxFiscalService } from './tax-fiscal.service';

describe('TaxFiscalController', () => {
  let controller: TaxFiscalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaxFiscalController],
      providers: [TaxFiscalService],
    }).compile();

    controller = module.get<TaxFiscalController>(TaxFiscalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
