import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    create(createStudentDto: CreateStudentDto): Promise<boolean>;
    find(id: number): Promise<import("../../domain/student").IStudent>;
    update(id: number, updateStudentDto: UpdateStudentDto): Promise<boolean>;
}
