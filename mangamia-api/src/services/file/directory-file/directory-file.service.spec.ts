import { Test, TestingModule } from '@nestjs/testing';
import { DirectoryFileService } from './directory-file.service';

describe('DirectoryFileService', () => {
  let service: DirectoryFileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DirectoryFileService],
    }).compile();

    service = module.get<DirectoryFileService>(DirectoryFileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
