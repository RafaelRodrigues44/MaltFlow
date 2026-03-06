import { Controller, Get, Post, Body, Param, Query, Delete } from '@nestjs/common';
import { InventoryService } from './inventory.service';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Get('balances')
  findAll() {
    return this.inventoryService.findAll();
  }

  @Get('balance/:codigo')
  getBalance(@Param('codigo') codigo: string, @Query('local') local: string) {
    return this.inventoryService.findByProduto(codigo, local);
  }

  @Post('balance')
  updateBalance(@Body() data: any) {
    return this.inventoryService.createOrUpdateBalance(data);
  }

  @Delete('balance/:codigo')
  remove(@Param('codigo') codigo: string, @Query('local') local: string) {
    return this.inventoryService.remove(codigo, local);
  }
}