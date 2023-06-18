import { RegisterRequest } from '../../dto/RegisterRequest.dto';
import { User } from '../../entity/user.entity';

export interface IUser {
    login(email: string, password: string): Promise<User>;
    register(request: RegisterRequest): Promise<User>;
}