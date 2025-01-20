import { Module } from '@nestjs/common';
import { MqttModule } from './mqtt/mqtt.module';
import { AppController } from './app.controller';

@Module({
  imports: [MqttModule],
  controllers: [AppController],
})
export class AppModule {}
