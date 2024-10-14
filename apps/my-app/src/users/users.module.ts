import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'apps/my-app/src/users/entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    {
      provide: 'USERS_SERVICE',
      useClass: UsersService,
    },
  ],
  controllers: [UsersController],
})
export class UsersModule {}
