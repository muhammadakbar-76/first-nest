import { Module } from '@nestjs/common';
import { StudentModule } from 'src/student/student.module';;
import { TeacherModule } from 'src/teacher/teacher.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import {Connection} from 'typeorm';
import { UsersModule } from 'src/users/users.module';
import config from 'src/ormconfig';


@Module({
  imports: [
    StudentModule,
    TeacherModule,
    UsersModule,
    TypeOrmModule.forRoot(config)]
})

export class AppModule {
  constructor(private connection: Connection) {}
}