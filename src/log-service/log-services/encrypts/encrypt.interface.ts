import { User } from '../../entity/user.entity';
export interface IEncrypt {
    encryptBybcrypt(user: User): Promise<string>;
    encryptByArg2(user: User): Promise<string>;
    encryptBySha512(user: User): Promise<string>;
}