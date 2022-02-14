import { Injectable } from '@nestjs/common';
import { CreateAnjayDto } from './dto/create-anjay.dto';
import { UpdateAnjayDto } from './dto/update-anjay.dto';

@Injectable()
export class AnjayService {
  create(createAnjayDto: CreateAnjayDto) {
    return 'This action adds a new anjay';
  }

  findAll() {
    return `This action returns all anjay`;
  }

  findOne(id: number) {
    return `This action returns a #${id} anjay`;
  }

  update(id: number, updateAnjayDto: UpdateAnjayDto) {
    return `This action updates a #${id} anjay`;
  }

  remove(id: number) {
    return `This action removes a #${id} anjay`;
  }
}
