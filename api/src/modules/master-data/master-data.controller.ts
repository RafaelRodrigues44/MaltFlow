import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MasterDataService } from './master-data.service';

@Controller('master-data')
export class MasterDataController {
  constructor(private readonly masterDataService: MasterDataService) {}

  @Post('clients')
  createSA1(@Body() data: any) {
    return this.masterDataService.createSA1(data);
  }

  @Get('clients')
  findAllSA1() {
    return this.masterDataService.findAllSA1();
  }

  @Get('clients/:codigo')
  findOneSA1(@Param('codigo') codigo: string) {
    return this.masterDataService.findOneSA1(codigo);
  }

  @Patch('clients/:codigo')
  updateSA1(@Param('codigo') codigo: string, @Body() data: any) {
    return this.masterDataService.updateSA1(codigo, data);
  }

  @Delete('clients/:codigo')
  removeSA1(@Param('codigo') codigo: string) {
    return this.masterDataService.removeSA1(codigo);
  }

  @Post('suppliers')
  createSA2(@Body() data: any) {
    return this.masterDataService.createSA2(data);
  }

  @Get('suppliers')
  findAllSA2() {
    return this.masterDataService.findAllSA2();
  }

  @Get('suppliers/:codigo')
  findOneSA2(@Param('codigo') codigo: string) {
    return this.masterDataService.findOneSA2(codigo);
  }

  @Patch('suppliers/:codigo')
  updateSA2(@Param('codigo') codigo: string, @Body() data: any) {
    return this.masterDataService.updateSA2(codigo, data);
  }

  @Delete('suppliers/:codigo')
  removeSA2(@Param('codigo') codigo: string) {
    return this.masterDataService.removeSA2(codigo);
  }

  @Post('products')
  createSB1(@Body() data: any) {
    return this.masterDataService.createSB1(data);
  }

  @Get('products')
  findAllSB1() {
    return this.masterDataService.findAllSB1();
  }

  @Get('products/:codigo')
  findOneSB1(@Param('codigo') codigo: string) {
    return this.masterDataService.findOneSB1(codigo);
  }

  @Patch('products/:codigo')
  updateSB1(@Param('codigo') codigo: string, @Body() data: any) {
    return this.masterDataService.updateSB1(codigo, data);
  }

  @Delete('products/:codigo')
  removeSB1(@Param('codigo') codigo: string) {
    return this.masterDataService.removeSB1(codigo);
  }
}