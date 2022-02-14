import { Module } from '@nestjs/common';
import { AnjayService } from './anjay.service';
import { AnjayController } from './anjay.controller';

@Module({
  controllers: [AnjayController],
  providers: [AnjayService]
})
export class AnjayModule {}
