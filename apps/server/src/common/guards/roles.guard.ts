import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride('isPublic', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) return true;
    const roles = this.reflector.get('roles', context.getHandler());
    const request = context.switchToHttp().getRequest();
    if (request.user) {
      const user = await this.prisma.user.findUnique({
        where: {
          id: request.user['id'],
        },
      });
      if (roles && roles.includes(user.role)) return true;
    }
    return false;
  }
}
