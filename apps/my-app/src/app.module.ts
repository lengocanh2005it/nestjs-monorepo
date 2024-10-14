import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_PIPE } from '@nestjs/core';
import { UsersModule } from 'apps/my-app/src/users/users.module';
import { PostsModule } from 'apps/my-app/posts/posts.module';
import { DatabaseModule } from '@app/database';

@Module({
  imports: [UsersModule, PostsModule, DatabaseModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
