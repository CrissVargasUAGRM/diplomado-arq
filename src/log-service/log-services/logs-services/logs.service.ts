import { Injectable, HttpStatus, Logger, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoggerEntity } from '../../entity/logger.entity';
import { Repository } from 'typeorm';
import { ILogs } from './logs.interface';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class LogsService implements ILogs{

    private readonly logger = new Logger(LogsService.name);

    constructor(
        @InjectRepository(LoggerEntity)
        private readonly loggerEntity: Repository<LoggerEntity>,
        private readonly httpService: HttpService
    ){}
    
    async saveLogDB(password: string){
        const valueLog = this.loggerEntity.create({fecha: `${new Date().toISOString()}`, valores: `la password ecriptada: ${password}`});
        await this.loggerEntity.save(valueLog);
    }
    
    async saveLogFileConsole(password: string){
        this.logger.log(`fecha: ${new Date().toISOString()}, valores: la password es ${password}`);
    }
    
    async saveLogEndPoint(password: string) {
        try {
            this.httpService.post("http://logger.odontoemergencias.com/api/log", { 'log_value': `valores; la password es ${password}` }).subscribe(data => {
                this.logger.log(data.status);
                this.logger.log("se envio al end point exitosamente");
            });
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
}
