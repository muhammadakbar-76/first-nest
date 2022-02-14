import { Injectable } from '@nestjs/common';
import { students } from '../db';
import { CreateStudentDto, FindStudentsResponseDto, StudentsResponseDto, UpdateStudentDto } from './dto/students.dto';
import {v4 as uuid} from "uuid";

@Injectable()
export class StudentService {

    private students = students;
    
    getStudents(): FindStudentsResponseDto[] {
        return this.students
    };

    getStudentById(id: string): FindStudentsResponseDto {
        return this.students.find(student => {
            return student.id === id;
        })
    };

    createStudent(payload: CreateStudentDto): StudentsResponseDto {
        let newStudent = {
            id: uuid(),
            ...payload,
        }

        this.students.push(newStudent);
        return newStudent;
    }

    updateStudent(id: string, payload: UpdateStudentDto): StudentsResponseDto {

        let updatedStudent: StudentsResponseDto;

        const updatedStudentList: StudentsResponseDto[] = this.students.map(student => {
            if (student.id !== id) return student; 
            return updatedStudent = {
                id: student.id,
                ...payload
            }
        });

        this.students = updatedStudentList;

        return updatedStudent;
    }
}
