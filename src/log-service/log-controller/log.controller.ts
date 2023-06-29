import { Body, Controller, Logger, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger'
import { LoginRequest } from '../dto/LoginRequest.dto';
import { RegisterRequest } from '../dto/RegisterRequest.dto';
import { MethodRequest } from '../dto/MethodEncrypt.dto';
import { MainService } from '../log-services/main.service';
import { UserService } from '../log-services/user/user.service';

@Controller('/log')
@ApiTags('Log Services')
export class LogController {

    constructor(
        private readonly mainService: MainService,
        private readonly userService: UserService,
    ){}

    @Post('/login')
    firstEncryption(@Body() request: LoginRequest){
        return this.userService.login(request.email, request.password);
    }

    @Post('/register')
    secondEncryption(@Body() request: RegisterRequest){
        return this.userService.register(request);
    }

    @Post('/method-encrypt-and-logger')
    thirdEncryption(@Body() request: MethodRequest){
        return this.mainService.mainMethodLogEncrypt(request);
    }
}
