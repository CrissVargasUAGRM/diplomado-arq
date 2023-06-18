import { HttpStatus, Injectable, InternalServerErrorException, NotFoundException, Logger } from '@nestjs/common';
import { User } from '../entity/user.entity';
import { MethodRequest } from '../dto/MethodEncrypt.dto';
import { UserService } from './user/user.service';
import { LogsService } from './logs/logs.service';
import { EncryptsService } from './encrypts/encrypts.service';

@Injectable()
export class MainService {

    constructor(
        private readonly userService: UserService,
        private readonly logsService: LogsService,
        private readonly encryptService: EncryptsService
    ){}

    async mainMethodLogEncrypt(request: MethodRequest){
        try {
            const user: User = await this.userService.login(request.email, request.password);

            let passwordEncrypt: string;

            if(request.typeEncrypt === '1'){
                passwordEncrypt = await this.encryptService.encryptBybcrypt(user);
            }

            if(request.typeEncrypt === '2'){
                passwordEncrypt = await this.encryptService.encryptByArg2(user);
            }

            if(request.typeEncrypt === '3'){
                passwordEncrypt = await this.encryptService.encryptBySha512(user);
            }

            if(request.typeLog === 'DB'){
                this.logsService.saveLogDB(passwordEncrypt);
            }
            if(request.typeLog === 'LOG'){
                this.logsService.saveLogFileConsole(passwordEncrypt);
            }

            return HttpStatus.OK;
        } catch (error) {
            console.log(error.message)
            throw new InternalServerErrorException(error.message);
        }
    }
}
