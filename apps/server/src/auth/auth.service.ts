import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as bcrypt from 'bcrypt';
import { Tokens } from './dto/types';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  // async signupLocal(dto: AuthSignup): Promise<Tokens> {
  //   const password = await this.hashData(dto.password);
  //   const newUser = await this.prisma.user.create({
  //     data: {
  //       name: dto.name,
  //       email: dto.email,
  //       phone: dto.phone,
  //       role: dto.role as Role,
  //       password: password,
  //     },
  //   });
  //   const tokens = await this.createToken(newUser.id, newUser.email);
  //   await this.updateHashedRt(newUser.id, tokens.refresh_token);
  //   return {
  //     ...tokens,
  //     role: newUser.role,
  //   };
  // }
  async signinLocal(dto: AuthDto): Promise<Tokens> {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (!user) throw new ForbiddenException('Access Denied');
    const passwordsMatches = await bcrypt.compare(dto.password, user.password);
    if (!passwordsMatches) throw new ForbiddenException('Access Denied');
    const tokens = await this.createToken(user.id, user.email, false);
    await this.updateHashedRt(user.id, tokens.refreshToken);
    return {
      ...tokens,
      role: user.role,
    };
  }
  async logout(id: string) {
    await this.prisma.user.updateMany({
      where: {
        id: id,
        hashedRt: {
          not: null,
        },
      },
      data: {
        hashedRt: null,
      },
    });
  }

  async refreshToken(id: string, rt: string): Promise<Tokens> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
        hashedRt: {
          not: null,
        },
      },
    });
    if (!user) throw new ForbiddenException('Access Denied');
    const compareRt = await bcrypt.compare(rt, user.hashedRt);
    if (!compareRt) throw new ForbiddenException('Access Denied');
    const tokens = await this.createToken(user.id, user.email, true);
    await this.updateHashedRt(user.id, tokens.refreshToken);
    return tokens;
  }

  //helpers----------------------------------------------------------------------------

  //update HashedRt
  async updateHashedRt(id: string, rt: string) {
    const hash = await this.hashData(rt);
    await this.prisma.user.update({
      where: {
        id: id,
      },
      data: {
        hashedRt: hash,
      },
    });
  }

  //hash data
  hashData(data: string) {
    if (data) return bcrypt.hash(data, 10);
  }

  // create token and refresh token
  async createToken(
    id: string,
    email: string,
    isCreated: boolean,
  ): Promise<Tokens> {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(
        {
          id,
          email,
        },
        {
          secret: process.env.ACCESS_TOKEN_SECRET,
          expiresIn: isCreated ? 60 * 60 * 24 * 7 : 30,
        },
      ),
      this.jwtService.signAsync(
        {
          id,
          email,
        },
        {
          secret: process.env.REFRESH_TOKEN_SECRET,
          expiresIn: isCreated ? 60 * 60 * 24 * 30 : 60 * 60 * 24 * 7,
        },
      ),
    ]);

    return {
      accessToken: at,
      refreshToken: rt,
    };
  }
}
