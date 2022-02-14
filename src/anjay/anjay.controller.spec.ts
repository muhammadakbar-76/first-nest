import { Test, TestingModule } from '@nestjs/testing';
import { AnjayController } from './anjay.controller';
import { AnjayService } from './anjay.service';

describe('AnjayController', () => {
  let controller: AnjayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnjayController],
      providers: [AnjayService],
    }).compile();

    controller = module.get<AnjayController>(AnjayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
