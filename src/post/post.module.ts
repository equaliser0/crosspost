import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { SplitterModule } from './splitter/splitter.module';

@Module({
  providers: [PostService],
  controllers: [PostController],
  imports: [SplitterModule]
})
export class PostModule {}
