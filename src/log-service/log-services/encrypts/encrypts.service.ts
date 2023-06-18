import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as argon2 from 'argon2';
import { createHmac, randomBytes } from 'crypto'; 
import { User } from '../../entity/user.entity';
import { IEncrypt } from './encrypt.interface';

@Injectable()
export class EncryptsService implements IEncrypt{
    async encryptBybcrypt(user: User): Promise<string>{
        const saltOrRounds = 10;
        const passwordEncrypt = await bcrypt.hash(user.password, saltOrRounds);
        return passwordEncrypt;
    }

    async encryptByArg2(user: User): Promise<string>{
        const passwordEncrypt = await argon2.hash(user.password);
        return passwordEncrypt;
    }

    async encryptBySha512(user: User): Promise<string>{
        const salt = randomBytes(16).toString('hex');
        const passwordEncrypt = createHmac('sha512', salt).update(user.password).digest('hex');
        return passwordEncrypt;
    }
}
