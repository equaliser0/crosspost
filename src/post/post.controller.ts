import { Controller, Post } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}
  @Post('post')
  async post() {
    return this.postService.post()
  }
}
