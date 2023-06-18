import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogServiceModule } from './log-service/log-service.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerModule } from 'nestjs-pino';
import { CORRELATION_ID_HEADER, CurrelationIdMiddleware } from './currelation-id.middleware';
import pino from 'pino';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      database: 'logger',
      username: 'postgres',
      password: 'Estudiar1995',
      autoLoadEntities: true,
      synchronize: true,
    }),
    LogServiceModule,
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
          options: {
            messageKey: 'message'
          },
        },
        messageKey: 'message',
        autoLogging: false,
        serializers: {
          req: () => {
            return undefined;
          },
          res: () => {
            return undefined;
          }
        },
        stream: pino.destination({
          dest: './logFile.log',
          minLength: 4096,
          sync: true,
          fsync: true
        })
      },
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(CurrelationIdMiddleware).forRoutes('*');
  }
}
