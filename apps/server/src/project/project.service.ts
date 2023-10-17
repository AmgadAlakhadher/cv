import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateProjectDto) {
    return dto;
    // return await this.prisma.project.create({
    //   data: {
    //     ...dto,
    //   },
    // });
  }

  async findAll() {
    return await this.prisma.project.findMany();
  }

  async findOne(id: string) {
    const project = await this.prisma.project.findFirst({
      where: {
        id,
      },
    });
    if (!project) throw new ForbiddenException('error: something went wrong');
    return await this.prisma.project.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, dto: UpdateProjectDto) {
    const project = await this.prisma.project.findFirst({
      where: {
        id,
      },
    });
    if (!project) throw new ForbiddenException('error: something went wrong');
    const updateOne = await this.prisma.project.updateMany({
      where: {
        id,
      },
      data: {
        ...dto,
      },
    });
    if (updateOne.count > 0)
      return await this.prisma.project.findUnique({
        where: {
          id,
        },
      });
  }

  async remove(id: string) {
    const project = await this.prisma.project.findFirst({
      where: {
        id,
      },
    });
    if (!project) throw new ForbiddenException('error: something went wrong');
    return await this.prisma.project.delete({
      where: {
        id,
      },
    });
  }
}
