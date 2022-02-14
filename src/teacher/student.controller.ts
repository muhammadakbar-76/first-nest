import { Controller, Get, Put ,Param, Body } from '@nestjs/common';
import { FindStudentsResponseDto, StudentsResponseDto, UpdateStudentDto } from 'src/student/dto/students.dto';
import { TeacherService } from './teacher.service';

@Controller('teachers/:id/students')
export class StudentTeacherController {

    constructor(private readonly teacherService: TeacherService) {}

    @Get()
    getStudentsByTeacherId(@Param("id") id: string): FindStudentsResponseDto[]{
        return this.teacherService.getStudentsByTeacherId(id);
    }
}