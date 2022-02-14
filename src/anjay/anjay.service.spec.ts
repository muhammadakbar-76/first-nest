import { Test, TestingModule } from '@nestjs/testing';
import { AnjayService } from './anjay.service';

describe('AnjayService', () => {
  let service: AnjayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnjayService],
    }).compile();

    service = module.get<AnjayService>(AnjayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
