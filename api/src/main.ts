import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ZodExceptionFilter } from './common/filters/zod-exception-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new ZodExceptionFilter());

  const config = new DocumentBuilder()
    .setTitle('MaltFlow API')
    .setDescription('Simulador de ERP Protheus para a Barley Importadora')
    .setVersion('1.0')
    .addTag('master-data')
    .addTag('financial-management')
    .addTag('tax-fiscal')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();