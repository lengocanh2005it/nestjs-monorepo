import { Controller, Get } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get()
  getAllPosts() {
    return 'All Posts';
  }
}
