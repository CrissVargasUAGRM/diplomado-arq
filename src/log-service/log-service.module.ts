import { Module } from '@nestjs/common';
import { LogController } from './log-controller/log.controller';
import { LogService } from './log-services/log.service';

@Module({
  controllers: [LogController],
  providers: [LogService]
})
export class LogServiceModule {}
