import { Test, TestingModule } from '@nestjs/testing';
import { ZipFileService } from './zip-file.service';

describe('ZipFileService', () => {
  let service: ZipFileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ZipFileService],
    }).compile();

    service = module.get<ZipFileService>(ZipFileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
