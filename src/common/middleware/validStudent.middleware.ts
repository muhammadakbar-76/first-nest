import { Injectable, NestMiddleware, HttpException } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { students } from "src/db";

@Injectable()
export class ValidStudentMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log("this middleware called");
        const studentId = req.params.id;
        if (students.some(student => student.id === studentId)) return next();
       throw new HttpException("Student not found", 404);
    }
}