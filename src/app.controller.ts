import { Controller, Post, Body } from '@nestjs/common';
import { MyService } from './mqtt/my.service';
import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger';
import { PublishDto, SubscribeDto } from './mqtt/mqtt.dto';

@Controller()
export class AppController {
  constructor(private readonly myService: MyService) {}

  @Post('publish')
  @ApiOperation({ summary: 'Publish a message to an MQTT topic' })
  @ApiBody({ type: PublishDto })
  async publishMessage(@Body() body: { topic: string; message: string }): Promise<void> {
    await this.myService.publishMessage(body.topic, body.message);
  }

  @Post('subscribe')
  @ApiOperation({ summary: 'Subscribe a message to an MQTT topic' })
  @ApiBody({ type: SubscribeDto })
  async subscribeToTopic(@Body() body: { topic: string }): Promise<void> {
    return this.myService.subscribeToTopic(body.topic);
  }
}
