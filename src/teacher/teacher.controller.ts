import { Body, Controller, Get, Param, ParseUUIDPipe, Post, Put } from "@nestjs/common";
import { CreateTeacherDto, EditTeacherDto, FindTeachersResponseDto, TeachersResponseDto } from "./dto/teacher.dto";
import { TeacherService } from "./teacher.service";

@Controller("teachers")
class TeachersController {

    constructor(private readonly teacherService: TeacherService) {}

    @Get()
    getTeachers(): FindTeachersResponseDto[]{
        return this.teacherService.getTeachers();
    }

    @Get(":id")
    getTeacherById(@Param("id", ParseUUIDPipe) id: string): FindTeachersResponseDto{
        return this.teacherService.getTeacherById(id);
    }

    @Post()
    createTeacher(@Body() body:CreateTeacherDto): TeachersResponseDto{
        return this.teacherService.createTeacher(body);
    }

    @Put(":id")
    editTeacher(@Param("id", ParseUUIDPipe) id: string, @Body() body: EditTeacherDto): TeachersResponseDto{
        return this.teacherService.editTeacher(id, body);
    }
}

export default TeachersController;