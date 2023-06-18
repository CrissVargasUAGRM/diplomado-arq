import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entity/user.entity';
import { Repository } from 'typeorm';
import { RegisterRequest } from '../../dto/RegisterRequest.dto';
import { IUser } from './user.interface';

@Injectable()
export class UserService implements IUser {

    private readonly logger = new Logger(UserService.name);

    constructor(
        @InjectRepository(User)
        private readonly logRepositoryUser: Repository<User>,
    ){}

    async login(email: string, password: string): Promise<User>{
        try {
            const user = await this.logRepositoryUser.find({where: {email: email}});

            this.logger.log(user[0].username);

            if(user.length === 0) throw new NotFoundException('No encontrado');

            if(user[0].password != password) throw new BadRequestException('usuario invalido')

            return user[0];
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async register(request: RegisterRequest): Promise<User>{
        try {
            const user = this.logRepositoryUser.create(request);

            await this.logRepositoryUser.save(request);

            return user;
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
}
