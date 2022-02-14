import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnjayService } from './anjay.service';
import { CreateAnjayDto } from './dto/create-anjay.dto';
import { UpdateAnjayDto } from './dto/update-anjay.dto';

@Controller('anjay')
export class AnjayController {
  constructor(private readonly anjayService: AnjayService) {}

  @Post()
  create(@Body() createAnjayDto: CreateAnjayDto) {
    return this.anjayService.create(createAnjayDto);
  }

  @Get()
  findAll() {
    return this.anjayService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.anjayService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnjayDto: UpdateAnjayDto) {
    return this.anjayService.update(+id, updateAnjayDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.anjayService.remove(+id);
  }
}
