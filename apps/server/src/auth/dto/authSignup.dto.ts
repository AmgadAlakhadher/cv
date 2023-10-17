import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthSignup {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  @IsString()
  role: string;
}
