import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('add-sample-data')
  async addSampleData() {
    await this.appService.addSampleData();
    return 'Sample data added';
  }
}
