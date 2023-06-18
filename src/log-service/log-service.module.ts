import { Module } from '@nestjs/common';
import { LogController } from './log-controller/log.controller';
import { MainService } from './log-services/main.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerEntity } from './entity/logger.entity';
import { User } from './entity/user.entity';
import { UserService } from './log-services/user/user.service';
import { LogsService } from './log-services/logs/logs.service';
import { EncryptsService } from './log-services/encrypts/encrypts.service';

@Module({
  controllers: [LogController],
  providers: [MainService, UserService, LogsService, EncryptsService],
  imports: [
    TypeOrmModule.forFeature([LoggerEntity, User])
  ]
})
export class LogServiceModule {}
