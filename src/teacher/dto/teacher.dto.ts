import { StudentsResponseDto } from "src/student/dto/students.dto";

export class TeachersResponseDto {
    id: string;
    name: string;
    students ?: StudentsResponseDto[];
}

export class FindTeachersResponseDto {
    id: string;
    name: string;
    students ?: StudentsResponseDto[];
}

export class CreateTeacherDto {
    name: string;
    students ?: StudentsResponseDto[];
}

export class EditTeacherDto {
    name: string;
    students ?: StudentsResponseDto[];
}