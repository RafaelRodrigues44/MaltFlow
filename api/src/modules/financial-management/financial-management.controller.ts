import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FinancialManagementService } from './financial-management.service';

@Controller('financial-management')
export class FinancialManagementController {
  constructor(private readonly financialManagementService: FinancialManagementService) {}

  @Post('receivables')
  createReceivable(@Body() data: any) {
    return this.financialManagementService.createSE1(data);
  }

  @Get('receivables')
  findAllReceivables() {
    return this.financialManagementService.findAllSE1();
  }

  @Get('receivables/:numero')
  findOneReceivable(@Param('numero') numero: string) {
    return this.financialManagementService.findOneSE1(numero);
  }

  @Patch('receivables/:numero')
  updateReceivable(@Param('numero') numero: string, @Body() data: any) {
    return this.financialManagementService.updateSE1(numero, data);
  }

  @Delete('receivables/:numero')
  removeReceivable(@Param('numero') numero: string) {
    return this.financialManagementService.removeSE1(numero);
  }

  @Post('payables')
  createPayable(@Body() data: any) {
    return this.financialManagementService.createSE2(data);
  }

  @Get('payables')
  findAllPayables() {
    return this.financialManagementService.findAllSE2();
  }

  @Get('payables/:numero')
  findOnePayable(@Param('numero') numero: string) {
    return this.financialManagementService.findOneSE2(numero);
  }

  @Patch('payables/:numero')
  updatePayable(@Param('numero') numero: string, @Body() data: any) {
    return this.financialManagementService.updateSE2(numero, data);
  }

  @Delete('payables/:numero')
  removePayable(@Param('numero') numero: string) {
    return this.financialManagementService.removeSE2(numero);
  }
}