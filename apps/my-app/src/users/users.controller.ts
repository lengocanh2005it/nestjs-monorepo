import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { CreateUserDto } from 'apps/my-app/src/users/dto/create-user.dto';
import { User } from 'apps/my-app/src/users/entity/user.entity';
import { UsersService } from 'apps/my-app/src/users/users.service';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('USERS_SERVICE') private readonly usersService: UsersService,
  ) {}

  @Get()
  async getUsers(): Promise<User[]> {
    return await this.usersService.getUsers();
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.usersService.createOne(createUserDto);
  }
}
