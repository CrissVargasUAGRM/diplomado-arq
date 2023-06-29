import { Module } from '@nestjs/common';
import { LogController } from './log-controller/log.controller';
import { MainService } from './log-services/main.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerEntity } from './entity/logger.entity';
import { User } from './entity/user.entity';
import { UserService } from './log-services/user/user.service';
import { LogsService } from './log-services/logs-services/logs.service';
import { EncryptsService } from './log-services/encrypts/encrypts.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [LogController],
  providers: [MainService, UserService, LogsService, EncryptsService],
  imports: [
    TypeOrmModule.forFeature([LoggerEntity, User]),
    HttpModule
  ]
})
export class LogServiceModule {}
