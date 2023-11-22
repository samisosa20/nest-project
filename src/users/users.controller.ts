import { Controller, Get, Post, Body } from '@nestjs/common';
import { User } from '@/interfaces';

@Controller('users')
export class UsersController {
  @Get()
  findAll(): string {
    return 'list users';
  }

  @Get('sammy')
  findOne(): string {
    return 'sub route';
  }

  @Post()
  async create(@Body() createUser: User) {
    return createUser;
  }
}
