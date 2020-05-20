import { Test, TestingModule } from '@nestjs/testing';
import { HiveApiService } from './hive-api.service';

describe('HiveApiService', () => {
  let service: HiveApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HiveApiService],
    }).compile();

    service = module.get<HiveApiService>(HiveApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
