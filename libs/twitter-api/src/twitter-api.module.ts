import { Module } from '@nestjs/common';
import { TwitterApiService } from './twitter-api.service';

@Module({
  providers: [TwitterApiService],
  exports: [TwitterApiService],
})
export class TwitterApiModule {}
