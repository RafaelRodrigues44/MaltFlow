import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaxFiscalService } from './tax-fiscal.service';

@Controller('tax-fiscal')
export class TaxFiscalController {
  constructor(private readonly taxFiscalService: TaxFiscalService) {}

  @Post('inbound')
  createSF1(@Body() data: any) {
    return this.taxFiscalService.createSF1(data);
  }

  @Get('inbound')
  findAllSF1() {
    return this.taxFiscalService.findAllSF1();
  }

  @Get('inbound/:numero')
  findOneSF1(@Param('numero') numero: string) {
    return this.taxFiscalService.findOneSF1(numero);
  }

  @Patch('inbound/:numero')
  updateSF1(@Param('numero') numero: string, @Body() data: any) {
    return this.taxFiscalService.updateSF1(numero, data);
  }

  @Delete('inbound/:numero')
  removeSF1(@Param('numero') numero: string) {
    return this.taxFiscalService.removeSF1(numero);
  }

  @Post('outbound')
  createSF2(@Body() data: any) {
    return this.taxFiscalService.createSF2(data);
  }

  @Get('outbound')
  findAllSF2() {
    return this.taxFiscalService.findAllSF2();
  }

  @Get('outbound/:numero')
  findOneSF2(@Param('numero') numero: string) {
    return this.taxFiscalService.findOneSF2(numero);
  }

  @Patch('outbound/:numero')
  updateSF2(@Param('numero') numero: string, @Body() data: any) {
    return this.taxFiscalService.updateSF2(numero, data);
  }

  @Delete('outbound/:numero')
  removeSF2(@Param('numero') numero: string) {
    return this.taxFiscalService.removeSF2(numero);
  }
}