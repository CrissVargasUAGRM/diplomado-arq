import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogServiceModule } from './log-service/log-service.module';

@Module({
  imports: [LogServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
