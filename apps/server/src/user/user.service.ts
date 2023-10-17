import { ForbiddenException, HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Role } from 'src/common/types';
import { SearchColumn } from 'src/common/types/searchColumn.type';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateUserDto, id: string) {
    let checkRole = false;
    const checkEmail = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    const checkPhone = await this.prisma.user.findUnique({
      where: {
        phone: dto.phone,
      },
    });
    if (checkPhone || checkEmail) throw new HttpException('Forbidden', 409);
    const role = await this.getRole(id); //fix this bug later, don't forget.
    if (role === (process.env.MANAGER as Role)) {
      if (
        (dto.role as Role) === Role.SELLER_MARKETPLACE ||
        (dto.role as Role) === Role.SELLER_ONLINE_STORE
      ) {
        checkRole = true;
      }
      if (!checkRole) throw new ForbiddenException('Access Denied');
      return await this.prisma.user.create({
        data: {
          name: dto.name,
          email: dto.email,
          city: dto.city,
          phone: dto.phone,
          password: dto.password,
          role: dto.role as Role,
        },
      });
    } else if (role === (process.env.ADMIN as Role))
      return await this.prisma.user.create({
        data: {
          name: dto.name,
          email: dto.email,
          city: dto.city,
          phone: dto.phone,
          password: dto.password,
          role: dto.role as Role,
        },
      });
  }

  async findAll(id: string) {
    return await this.prisma.user.findMany({
      where: {
        id: {
          not: id,
        },
      },
    });
  }

  async findCustomers() {
    return await this.prisma.user.findMany({
      where: {
        role: {
          in: [Role.SELLER_ONLINE_STORE, Role.SELLER_MARKETPLACE],
        },
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        city: true,
        role: true,
        qty_requests: true,
      },
    });
  }

  async onSearch(value: string, column: string, role: string, id: string) {
    const roleUser = await this.getRole(id);
    const searchColumun = column as SearchColumn;
    switch (searchColumun) {
      case SearchColumn.ID:
        return await this.prisma.user.findUnique({
          where: {
            id: value,
            role:
              roleUser === (process.env.MANAGER as Role)
                ? {
                    in: [Role.SELLER_ONLINE_STORE, Role.SELLER_MARKETPLACE],
                  }
                : (role as Role),
          },
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            city: true,
            role: true,
          },
        });
        break;
      case SearchColumn.NAME:
        return await this.prisma.user.findMany({
          where: {
            name: {
              contains: value,
            },
            role:
              roleUser === (process.env.MANAGER as Role)
                ? {
                    in: [Role.SELLER_ONLINE_STORE, Role.SELLER_MARKETPLACE],
                  }
                : (role as Role),
          },
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            city: true,
            role: true,
          },
        });
        break;
      case SearchColumn.EMAIL:
        return await this.prisma.user.findMany({
          where: {
            email: {
              contains: value,
            },
            role:
              roleUser === (process.env.MANAGER as Role)
                ? {
                    in: [Role.SELLER_ONLINE_STORE, Role.SELLER_MARKETPLACE],
                  }
                : (role as Role),
          },
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            city: true,
            role: true,
          },
        });
        break;
      case SearchColumn.CITY:
        return await this.prisma.user.findMany({
          where: {
            email: value, //later change this to city,you have to add column city in table user
            role:
              roleUser === (process.env.MANAGER as Role)
                ? {
                    in: [Role.SELLER_ONLINE_STORE, Role.SELLER_MARKETPLACE],
                  }
                : (role as Role),
          },
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            city: true,
            role: true,
          },
        });
        break;
      case SearchColumn.PHONE:
        return await this.prisma.user.findMany({
          where: {
            phone: {
              contains: value,
            },
            role:
              roleUser === (process.env.MANAGER as Role)
                ? {
                    in: [Role.SELLER_ONLINE_STORE, Role.SELLER_MARKETPLACE],
                  }
                : (role as Role),
          },
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            city: true,
            role: true,
          },
        });
        break;
      default:
        throw new ForbiddenException('Access Denied');
    }
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        id,
      },
    });
    if (!user) throw new ForbiddenException('error: something went wrong');
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, dto: UpdateUserDto) {
    const user = await this.prisma.user.findFirst({
      where: {
        id,
      },
    });
    if (!user) throw new ForbiddenException('error: something went wrong');
    return await this.prisma.user.updateMany({
      where: {
        id,
      },
      data: {
        ...dto,
        role: dto.role as Role,
      },
    });
  }

  async remove(id: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        id,
      },
    });
    if (!user) throw new ForbiddenException('error: something went wrong');
    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
  // helpers ------------------------------------------------------------------------
  async getRole(id: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        role: true,
      },
    });
    return user.role;
  }
}
