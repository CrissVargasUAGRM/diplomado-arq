import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger'

@Controller('/log')
@ApiTags('Log Services')
export class LogController {

    @Post('/first')
    firstEncryption(){

    }

    @Post('/second')
    secondEncryption(){

    }

    @Post('/third')
    thirdEncryption(){

    }
}
