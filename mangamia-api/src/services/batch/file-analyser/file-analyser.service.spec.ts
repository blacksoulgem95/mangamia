import { Test, TestingModule } from '@nestjs/testing';
import { FileAnalyserService } from './file-analyser.service';

describe('FileAnalyserService', () => {
  let service: FileAnalyserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FileAnalyserService],
    }).compile();

    service = module.get<FileAnalyserService>(FileAnalyserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
