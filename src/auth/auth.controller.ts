import { Controller, Post, Res, UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/current-user.decorator';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { Response } from "express";
import { UserResponse } from "../users/dto/response/user-response.dto";
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor (private authService: AuthService) {}
    
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(
        @CurrentUser() user: UserResponse,
        @Res({ passthrough: true }) response: Response
    ): Promise<void> {
        await this.authService.login(user, response);
        response.send(user);
    }

    @UseGuards(JwtAuthGuard)
    @Post('logout')
    async logout(
        @Res({ passthrough: true }) response: Response
    ): Promise<void> {
        response.clearCookie('Authentication');
        response.send();
    }
}
