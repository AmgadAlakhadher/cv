import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
//AuthSignup,
import { Tokens } from './dto/types';
import {
  Public,
  Roles,
  getCurrentUser,
  getCurrentUserId,
} from 'src/common/decorators';
import { RtGuard } from 'src/common/guards';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // @Public()
  // @Post('local/signup')
  // @HttpCode(HttpStatus.CREATED)
  // signupLocal(@Body() dto: AuthSignup): Promise<Tokens> {
  //   return this.authService.signupLocal(dto);
  // }

  @Public()
  @Post('local/signin')
  @HttpCode(HttpStatus.OK)
  signinLocal(@Body() dto: AuthDto): Promise<Tokens> {
    return this.authService.signinLocal(dto);
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  @Roles('ADMIN', 'MANAGER', 'WORKER')
  logout(@getCurrentUserId() id: string) {
    return this.authService.logout(id);
  }

  @UseGuards(RtGuard)
  @Post('refresh')
  @Public()
  @HttpCode(HttpStatus.OK)
  refreshToken(
    @getCurrentUser('id') id: string,
    @getCurrentUser('refreshToken') refreshToken: string,
  ) {
    return this.authService.refreshToken(id, refreshToken);
  }
}
