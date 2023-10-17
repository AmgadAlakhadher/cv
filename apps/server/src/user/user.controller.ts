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
  Query,
  ForbiddenException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Roles, getCurrentUserId } from 'src/common/decorators';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Roles('ADMIN', 'MANAGER')
  create(@Body() dto: CreateUserDto, @getCurrentUserId() id: string) {
    return this.userService.create(dto, id);
  }

  @Get()
  @Roles('ADMIN', 'MANAGER')
  @HttpCode(HttpStatus.OK)
  findAll(@getCurrentUserId() id: string) {
    return this.userService.findAll(id);
  }

  @Get('/customers')
  @HttpCode(HttpStatus.OK)
  @Roles('ADMIN', 'MANAGER')
  findCustomers() {
    return this.userService.findCustomers();
  }

  @Get('search')
  @HttpCode(HttpStatus.OK)
  @Roles('ADMIN', 'MANAGER')
  onSearch(@Query() query: any, @getCurrentUserId() id: string) {
    const { value, column, role } = query;
    return this.userService.onSearch(value, column, role, id);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @Roles('ADMIN')
  findOne(@Param('id') id: string) {
    if (!id) throw new ForbiddenException('error: something went wrong');
    return this.userService.findOne(id);
  }

  @Patch(':id')
  @Roles('ADMIN')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    if (!id) throw new ForbiddenException('error: something went wrong');
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @HttpCode(204)
  @Roles('ADMIN')
  remove(@Param('id') id: string) {
    if (!id) throw new ForbiddenException('error: something went wrong');
    return this.userService.remove(id);
  }
}
