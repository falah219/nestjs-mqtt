import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class MqttClient {
  constructor(@Inject('MQTT_SERVICE') public readonly client: ClientProxy) {}
}
