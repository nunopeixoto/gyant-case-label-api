import { Injectable, NotFoundException, UnauthorizedException, UnprocessableEntityException } from '@nestjs/common';
import { hash, compare } from 'bcrypt';
import { CreateUserRequest } from './dto/request/create-user-request.dto';
import { UserResponse } from './dto/response/user-response.dto';
import { User } from './models/user';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
    constructor(private readonly usersRepository: UsersRepository) {}

    async createUser(createUserRequest: CreateUserRequest) : Promise<UserResponse> {
        await this.validateCreateuserRequest(createUserRequest);
        const user = await this.usersRepository.insertOne({
            ...createUserRequest,
            password: await hash(createUserRequest.password, 10)
        });

        return this.buildResponse(user);
    }
    
    async validateUser(email: string, password: string): Promise<UserResponse> {
        const user = await this.usersRepository.findOneByEmail(email);
        if (!user) {
            throw new NotFoundException('User not found.');
        }

        const passwordIsValid = await compare(password, user.password); 
        if (!passwordIsValid) {
            throw new UnauthorizedException('Wrong credentials.');
        }

        return this.buildResponse(user);
    } 

    private async validateCreateuserRequest(createUserRequest: CreateUserRequest): Promise<void> {
        const user = await this.usersRepository.findOneByEmail(createUserRequest.email);

        if (user) {
            throw new UnprocessableEntityException('This email already exists.')
        }
    }


    private buildResponse(user: User): UserResponse {
        return {
            _id: user._id.toHexString(),
            email: user.email
        }
    }
}
