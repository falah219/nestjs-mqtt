import { ApiProperty } from '@nestjs/swagger';

export class PublishDto {
  @ApiProperty({ description: 'MQTT topic to publish to', example: 'home' })
  topic: string;

  @ApiProperty({ description: 'Message to publish', example: '25.3' })
  message: string;
}

export class SubscribeDto {
  @ApiProperty({ description: 'MQTT topic to subscribe to', example: 'home' })
  topic: string;
}
