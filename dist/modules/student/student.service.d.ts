import { Repository } from 'typeorm';
import { Group, Mark, Student } from '../../entities';
import { IStudent } from '../../domain/student';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
export declare class StudentService {
    private readonly studentRepository;
    private readonly groupRepository;
    private readonly markRepository;
    constructor(studentRepository: Repository<Student>, groupRepository: Repository<Group>, markRepository: Repository<Mark>);
    create(createStudentDto: CreateStudentDto): Promise<boolean>;
    find(id: number): Promise<IStudent | null>;
    update(id: number, updateStudentDto: UpdateStudentDto): Promise<boolean>;
}
