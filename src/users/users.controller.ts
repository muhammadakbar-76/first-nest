import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { User } from './user.entity';
import { CreateUserDto, UpdateUserDto } from './users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getAllUsers(): Promise<User[]> {      
        return this.usersService.findAll();
    }

    @Get(":id")
    getUser(@Param("id",ParseIntPipe) id: number): Promise<User> {
        return this.usersService.findOne(id);
    }

    @Post()
    createUser(@Body() body:CreateUserDto): Promise<User> {
        return this.usersService.createUser(body);
    }

    @Put(":id")
    updateUser(@Param("id", ParseIntPipe) id: number,@Body() body: UpdateUserDto): Promise<User> {
        return this.usersService.updateUser(id,body);
    }

    @Delete(":id")
    deleteUser(@Param("id", ParseIntPipe) id:number): Promise<User> {
        return this.usersService.remove(id);
    }
}
