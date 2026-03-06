import { Controller, Get, Post, Body, Param, Patch, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SalesOrderSchema } from './entities/sd2.entity';

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post('order')
  @HttpCode(HttpStatus.CREATED)
  async createOrder(@Body() body: any) {
    const validatedData = SalesOrderSchema.parse(body);
    return await this.salesService.processarVenda(validatedData);
  }

  @Get('orders')
  async findAll() {
    return await this.salesService.findAll();
  }

  @Get('order/:id')
  async findOne(@Param('id') id: string) {
    return await this.salesService.findOne(+id);
  }

  @Patch('order/:id')
  async update(@Param('id') id: string, @Body() updateData: any) {
    return await this.salesService.update(+id, updateData);
  }

  @Delete('order/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    return await this.salesService.remove(+id);
  }
}