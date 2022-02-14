import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {User} from './user.entity';

@Module({
    imports:[TypeOrmModule.forFeature([User])], //there is an option to add every entity from forFeature method, check doc
    controllers: [UsersController],
    providers: [UsersService]
})
export class UsersModule {}
