import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  const config =  new DocumentBuilder()
    .setTitle('Task MQTT NestJS --Falah')
    .setDescription('Integration NestJs with MicroService MQTT Broker --falah')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1', app, document);

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
