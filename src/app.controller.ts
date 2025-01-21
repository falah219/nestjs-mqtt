import { Controller, Post, Body, Get } from '@nestjs/common';
import { MyService } from './mqtt/my.service';
import { ApiTags, ApiResponse,ApiOperation, ApiBody } from '@nestjs/swagger';
import { PublishDto, SubscribeDto } from './mqtt/mqtt.dto';

@Controller('data')
export class AppController {
  constructor(private readonly myService: MyService) { }

  @Get()
  @ApiOperation({ summary: 'Get data in JSON format' })
  @ApiResponse({
    status: 200,
    description: 'Data retrieved successfully',
    schema: {
      example: {
        message: 'Data received successfully!',
        timestamp: new Date().toISOString(),
        status: 'success',
      },
    },
  })
  getData(): any {
    return {
      message: 'Data received successfully!',
      timestamp: new Date().toISOString(),
      status: 'success',
    };
  }

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
