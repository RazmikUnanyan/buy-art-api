import {BadGatewayException, Body, Controller, HttpCode, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {AuthDto} from "./dto/auth.dto";
import {AuthService} from "./auth.service";
import { USER_ALREADY_EXISTS } from './user.constant';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @UsePipes(new ValidationPipe())
    @Post('register')
    async register(@Body() dto: AuthDto) {
        const oldUser = await this.authService.findUser(dto.email)
        if(oldUser){
            throw new BadGatewayException(USER_ALREADY_EXISTS)
        }
        
        return this.authService.createUser(dto)

    }

    @HttpCode(200)
    @Post('login')
    async login(@Body() dto: AuthDto) {

    }

}
