import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { FindStudentsResponseDto } from 'src/student/dto/students.dto';
import { students, teachers } from '../db';
import { CreateTeacherDto, EditTeacherDto, FindTeachersResponseDto, TeachersResponseDto } from './dto/teacher.dto';

@Injectable()
export class TeacherService {
    private teachers = teachers;
    private students = students;

    getTeachers(): FindTeachersResponseDto[] {
        return this.teachers;
    };

    getTeacherById(id: string): FindTeachersResponseDto {
        return this.teachers.find(teacher => teacher.id === id);
    };

    createTeacher(payload: CreateTeacherDto): TeachersResponseDto {
        const newTeacher = {
            id: randomUUID(),
            ...payload,
        }

        this.teachers.push(newTeacher);
        return newTeacher;
    };

    editTeacher(id: string, payload: EditTeacherDto): TeachersResponseDto {
        let updatedTeacher: TeachersResponseDto;

        const updatedTeacherList: TeachersResponseDto[] = this.teachers.map(teacher => {
            if (teacher.id !== id) return teacher; 
            return updatedTeacher = {
                id: teacher.id,
                ...payload
            }
        });

        this.teachers = updatedTeacherList;

        return updatedTeacher;
    }

    getStudentsByTeacherId(id: string): FindStudentsResponseDto[] {
        const studentList = this.students.map(student => {
            if(student.teacher === id) return student;
        })
        return studentList;
    }

}
