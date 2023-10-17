import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard, RolesGuard } from './common/guards';
import { projectModule } from './project/project.module';
// import { UserModule } from './user/user.module';
import { config } from 'dotenv';
config();

@Module({
  imports: [AuthModule, PrismaModule, projectModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
