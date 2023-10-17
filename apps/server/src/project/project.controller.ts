import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Public } from 'src/common/decorators';
import { Roles } from 'src/common/decorators/role.decorator';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Roles('ADMIN')
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectService.create(createProjectDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @Public()
  findAll() {
    return this.projectService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @Public()
  findOne(@Param('id') id: string) {
    return this.projectService.findOne(id);
  }

  @Patch(':id')
  @Roles('ADMIN')
  update(@Param('id') id: string, @Body() dto: UpdateProjectDto) {
    return this.projectService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(204)
  @Roles('ADMIN')
  remove(@Param('id') id: string) {
    return this.projectService.remove(id);
  }
}
