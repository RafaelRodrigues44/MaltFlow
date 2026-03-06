import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ZodExceptionFilter } from './common/filters/zod-exception-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new ZodExceptionFilter());
  app.enableCors(); 
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('MaltFlow API')
    .setDescription('Simulador de ERP Protheus para a Barley Importadora')
    .setVersion('1.0')
    .addTag('sales', 'Operações de venda e orquestração')
    .addTag('inventory', 'Controle de saldo e estoque mínimo')
    .addTag('master-data', 'Cadastros base (SA1, SA2, SB1)')
    .addTag('financial-management', 'Contas a pagar e receber')
    .addTag('tax-fiscal', 'Livros fiscais e Notas')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`MaltFlow rodando em: http://localhost:${port}/api/docs`);
}
bootstrap();