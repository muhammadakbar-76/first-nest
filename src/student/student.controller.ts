import { Body, Controller, Get, Param, Post, Put, ParseUUIDPipe } from "@nestjs/common";
import { CreateStudentDto, FindStudentsResponseDto, StudentsResponseDto, UpdateStudentDto } from "./dto/students.dto";
import { StudentService } from "./student.service";


@Controller("students")
class StudentController {

    constructor(private readonly studentService: StudentService) {}

    @Get()
    getStudents(): FindStudentsResponseDto[] {
        return this.studentService.getStudents();
    }

    @Get(':id')
    getStudentById(@Param("id", ParseUUIDPipe) id: string): FindStudentsResponseDto{
        return this.studentService.getStudentById(id);
    }

    @Post()
    createStudent(@Body() body: CreateStudentDto): StudentsResponseDto{
        return this.studentService.createStudent(body);
    }

    @Put(":id")
    editStudent(@Param("id", new ParseUUIDPipe()) id: string, @Body() body: UpdateStudentDto): StudentsResponseDto{
        return this.studentService.updateStudent(id,body);
    }
}

export default StudentController;