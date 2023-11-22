import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { User } from '@/interfaces';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
  constructor(private UsersService: UsersService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.UsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<User> {
    return this.UsersService.findOne(id);
  }

  @Post()
  async create(@Body() createUser: User) {
    return this.UsersService.create(createUser);
  }

  @Put()
  async update(@Param('id') id: number, @Body() createUser: User) {
    return this.UsersService.update(id, createUser);
  }
}
