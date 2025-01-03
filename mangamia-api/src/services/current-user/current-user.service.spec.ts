import { Test, TestingModule } from '@nestjs/testing';
import { CurrentUserService } from './current-user.service';

describe('CurrentUserService', () => {
  let service: CurrentUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CurrentUserService],
    }).compile();

    service = module.get<CurrentUserService>(CurrentUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
