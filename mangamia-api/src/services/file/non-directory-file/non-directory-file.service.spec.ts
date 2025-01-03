import { Test, TestingModule } from '@nestjs/testing';
import { NonDirectoryFileService } from './non-directory-file.service';

describe('NonDirectoryFileService', () => {
  let service: NonDirectoryFileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NonDirectoryFileService],
    }).compile();

    service = module.get<NonDirectoryFileService>(NonDirectoryFileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
