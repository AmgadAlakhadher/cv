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
  phone: string;
  @IsString()
  @IsNotEmpty()
  password: string;
  isActive?: boolean;
  @IsNotEmpty()
  @IsString()
  role: string;
}
