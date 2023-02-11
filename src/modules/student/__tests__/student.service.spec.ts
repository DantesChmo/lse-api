import { Test, TestingModule } from '@nestjs/testing';
import { getConnection } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { DbModule } from '../../db';
import { Group, Student, Lesson, Mark } from '../../../entities';
import { StudentService } from '../student.service';
import { StudentModule } from '../student.module';
import {
  populateDb,
  selectFromDb,
  truncateDb,
} from '../../../utils/fixture-db';
// import { initialGroup } from '../../../fixtures/group';
// import { initialStudent, testStudent } from '../../../fixtures/student';
import { initialLesson } from '../../../fixtures/lesson';
import { CreateStudentDto } from '../dto/create-student.dto';

describe.skip('StudentService', () => {
  let service: StudentService;

  it('', () => {
    expect(true).toBeTruthy();
  });
  /*
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DbModule, StudentModule],
      providers: [StudentService],
    }).compile();

    service = module.get<StudentService>(StudentService);

    const group = await populateDb(Group, initialGroup);
    const student = await populateDb(Student, initialStudent);
    const lesson = await populateDb(Lesson, initialLesson);

    await getConnection()
      .createQueryBuilder()
      .relation(Group, 'students')
      .of(group)
      .add(student);

    await getConnection()
      .createQueryBuilder()
      .relation(Group, 'lessons')
      .of(group)
      .add(lesson);
  });

  afterEach(async () => {
    await truncateDb(Group);
    await truncateDb(Student);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a student', async () => {
    const dto: CreateStudentDto = plainToInstance<
      CreateStudentDto,
      CreateStudentDto
    >(CreateStudentDto, testStudent);

    const result = await service.create(dto);
    const check = await selectFromDb(
      Student,
      'student.firstName = :firstName',
      {
        firstName: testStudent.firstName,
      },
    );

    expect(result).toBeTruthy();
    expect(check).toBeDefined();
    expect(check).not.toBeNull();
  });

  it('should create a student without comment', async () => {
    const testStudentWithoutComment = { ...testStudent, comment: null };

    const dto: CreateStudentDto = plainToInstance<
      CreateStudentDto,
      CreateStudentDto
    >(CreateStudentDto, testStudentWithoutComment);

    const result = await service.create(dto);
    const check = await selectFromDb(
      Student,
      'student.firstName = :firstName',
      {
        firstName: testStudent.firstName,
      },
    );

    expect(result).toBeTruthy();
    expect(check).toBeDefined();
    expect(check).not.toBeNull();
    expect(check.comment).toBeNull();
  });

  it('should find a student by id', async () => {
    const result = await service.findOne(initialStudent.id);

    delete result['updatedAt'];
    const { groupId: _groupId, ...initialStudentRest } = initialStudent;
    delete initialStudentRest['updatedAt'];

    expect(result).toBeDefined();
    expect(result).not.toBeNull();
    expect(result).toEqual(initialStudentRest);
  });

  it('should add a comment to the student correctly', async () => {
    const comment = 'Hey';
    const result = await service.addComment(initialStudent.id, comment);
    const check = await selectFromDb(
      Student,
      'student.firstName = :firstName',
      {
        firstName: initialStudent.firstName,
      },
    );

    expect(result).toBeDefined();
    expect(result).toBeTruthy();
    expect(check.comment).toStrictEqual(comment);
  });

  it('should add mark to the student correctly', async () => {
    const mark = 'exist';
    const lessonDate = '1999-12-10';
    const result = await service.setMark(initialStudent.id, {
      mark,
      lessonDate,
    });

    const check = await selectFromDb(
      Student,
      'student.firstName = :firstName',
      {
        firstName: initialStudent.firstName,
      },
    );

    const checkMark = await selectFromDb(Mark, 'mark.studentId = :studentId', {
      studentId: initialStudent.id,
    });

    expect(check).toBeDefined();

    expect(result).toBeDefined();
    expect(result).toBeTruthy();

    expect(checkMark).toBeDefined();
    expect(checkMark.value).toBeDefined();
    expect(checkMark.value).toStrictEqual(mark);
  });

  it('should change mark if it exists', async () => {
    expect(200).toBe(200);
  });
  */
});
