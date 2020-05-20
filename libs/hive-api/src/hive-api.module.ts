import { Module } from '@nestjs/common';
import { HiveApiService } from './hive-api.service';

@Module({
  providers: [HiveApiService],
  exports: [HiveApiService],
})
export class HiveApiModule {}
