import {
	Body,
	Controller,
	HttpCode,
	Post,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { AuthDto } from './auth.dto';
import { AuthService } from './auth.service';
import { RefreshTokenDto } from './dto/refreshToken.dto';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	//Register
	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('register')
	async register(@Body() dto: AuthDto) {
		return this.authService.register(dto);
	}
	//login
	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('login')
	async login(@Body() dto: AuthDto) {
		return this.authService.login(dto);
	}
	//getToken
	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('login/acces-token')
	async getNewTokens(@Body() dto: RefreshTokenDto) {
		return this.authService.getNewTokens(dto.refreshToken);
	}
}
