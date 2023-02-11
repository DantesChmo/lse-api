import { Injectable, NotImplementedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group, Mark, Student } from '../../entities';
import { IStudent } from '../../domain/student';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,

    @InjectRepository(Group)
    private readonly groupRepository: Repository<Group>,

    @InjectRepository(Mark)
    private readonly markRepository: Repository<Mark>,
  ) {}

  async create(createStudentDto: CreateStudentDto): Promise<boolean> {
    throw new NotImplementedException();
  }

  async find(id: number): Promise<IStudent | null> {
    throw new NotImplementedException();
  }

  async update(
    id: number,
    updateStudentDto: UpdateStudentDto,
  ): Promise<boolean> {
    throw new NotImplementedException();
  }

  /*
  async create(createStudentDto: CreateStudentDto): Promise<boolean> {
    try {
      const group = await this.groupRepository.findOne(
        createStudentDto.groupId,
      );

      const student = new Student();
      student.firstName = createStudentDto.firstName;
      student.secondName = createStudentDto.secondName;
      student.comment = createStudentDto.comment;
      await this.studentRepository.save(student);

      if (group.students) {
        group.students.push(student);
      } else {
        group.students = [student];
      }

      await this.groupRepository.save(group);

      return true;
    } catch (_e) {
      return false;
    }
  }

  async findOne(id: string): Promise<Student | null> {
    try {
      return await this.studentRepository.findOne(id);
    } catch (_e) {
      return null;
    }
  }

  async addComment(id: string, comment: string): Promise<boolean> {
    try {
      const student = await this.findOne(id);

      if (!student) {
        return false;
      }

      student.comment = comment;
      await this.studentRepository.save(student);

      return true;
    } catch (_e) {
      return false;
    }
  }

  async setMark(id: string, setMarkDto: SetMarkDto): Promise<boolean> {
    try {
      const currentMark = await this.markRepository.findOne({
        where: {
          lesson: { date: setMarkDto.lessonDate },
          student: { id },
        },
        relations: ['lesson', 'student'],
      });

      if (currentMark) {
        currentMark.value = setMarkDto.mark;
        await this.markRepository.save(currentMark);
        return true;
      }

      const mark = new Mark();

      const student = await this.studentRepository.findOne(id, {
        relations: ['group'],
      });
      if (!student) {
        return false;
      }

      const lesson = await this.lessonRepository.findOne({
        where: {
          group: { id: student.group.id },
          date: setMarkDto.lessonDate,
        },
        relations: ['group'],
      });
      if (!lesson) {
        return false;
      }

      mark.lesson = lesson;
      mark.student = student;
      mark.value = setMarkDto.mark;

      await this.markRepository.save(mark);

      return true;
    } catch (_e) {
      return false;
    }
  }

  findAll() {
    return `This action returns all student`;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
  */
}
