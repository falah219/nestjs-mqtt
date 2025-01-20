
import { Injectable } from '@nestjs/common';
import { MqttClient } from './mqtt/mqtt.client';

@Injectable()
export class MyService {
  constructor(private readonly mqttClient: MqttClient) {}

  async publishMessage(topic: string, message: string): Promise<void> {
    await this.mqttClient.client.emit(topic, message).toPromise();
  }

  async subscribeToTopic(topic: string): Promise<void> {
    console.log(`Subscribed to topic: ${topic}`);
  }
}
