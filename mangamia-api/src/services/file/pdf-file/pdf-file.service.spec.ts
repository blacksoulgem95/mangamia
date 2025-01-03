import { Test, TestingModule } from '@nestjs/testing';
import { PdfFileService } from './pdf-file.service';

describe('PdfFileService', () => {
  let service: PdfFileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PdfFileService],
    }).compile();

    service = module.get<PdfFileService>(PdfFileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
