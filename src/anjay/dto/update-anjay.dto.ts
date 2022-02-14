import { PartialType } from '@nestjs/mapped-types';
import { CreateAnjayDto } from './create-anjay.dto';

export class UpdateAnjayDto extends PartialType(CreateAnjayDto) {}
