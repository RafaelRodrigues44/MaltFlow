import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('System') 
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Verifica o status da API MaltFlow' })
  @ApiResponse({ status: 200, description: 'API online e operacional.' })
  getHello(): any {
    return this.appService.getHello();
  }
}
