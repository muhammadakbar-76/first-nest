import { Module } from '@nestjs/common';
import { StudentTeacherController } from './student.controller';
import TeachersController from './teacher.controller';
import { TeacherService } from './teacher.service';

@Module({
    controllers: [TeachersController, StudentTeacherController],
    providers: [TeacherService]
})

//if you want to use studentservice in here, u need to export that service inside student module, and then import that student module to here

export class TeacherModule {}
