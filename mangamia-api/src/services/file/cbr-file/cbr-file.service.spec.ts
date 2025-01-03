import { Test, TestingModule } from '@nestjs/testing';
import { CbrFileService } from './cbr-file.service';

describe('CbrFileService', () => {
  let service: CbrFileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CbrFileService],
    }).compile();

    service = module.get<CbrFileService>(CbrFileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
