import { Test, TestingModule } from '@nestjs/testing';
import { TaxFiscalService } from './tax-fiscal.service';

describe('TaxFiscalService', () => {
  let service: TaxFiscalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaxFiscalService],
    }).compile();

    service = module.get<TaxFiscalService>(TaxFiscalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
