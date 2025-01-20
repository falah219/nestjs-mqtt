import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MyService } from './my.service';
import { MqttClient } from './mqtt.client';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MQTT_SERVICE',
        transport: Transport.MQTT,
        options: {
          url: 'mqtt://192.3.128.100:1883',
          username: 'demo',
          password: '@Dmin123456'
        },
      },
    ]),
  ],
  providers: [MqttClient, MyService],
  exports: [MyService],
})
export class MqttModule {}
