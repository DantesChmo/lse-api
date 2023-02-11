import { Test, TestingModule } from '@nestjs/testing';
import { IStudent } from '../../../domain/student';
import { studentFixture } from '../../../fixtures/student';
import { CreateStudentDto } from '../dto/create-student.dto';
import { UpdateStudentDto } from '../dto/update-student.dto';
import { StudentController } from '../student.controller';
import { StudentService } from '../student.service';

const mockStudentService: Pick<StudentService, 'find' | 'create' | 'update'> = {
  find: jest.fn(async (id: number) =>
    id === 0 ? null : (studentFixture.initialStudent as IStudent),
  ),
  create: jest.fn(async () => true),
  update: jest.fn(async (id: number) => (id === 0 ? false : true)),
};

describe('StudentController', () => {
  let controller: StudentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentController],
      providers: [StudentService],
    })
      .overrideProvider(StudentService)
      .useValue(mockStudentService)
      .compile();

    controller = module.get<StudentController>(StudentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should find a student', async () => {
    const student = await controller.find(studentFixture.initialStudent.id);

    expect(student).toBeDefined();
    expect(student.firstName).toBe(studentFixture.initialStudent.firstName);
    expect(student.secondName).toBe(studentFixture.initialStudent.secondName);
  });

  it('should create a student', async () => {
    const body = new CreateStudentDto();
    body.firstName = studentFixture.testStudent.firstName;
    body.secondName = studentFixture.testStudent.secondName;
    body.groupId = 0;

    const result = await controller.create(body);

    expect(result).toBeTruthy();
  });

  it('should update the student', async () => {
    const body = new UpdateStudentDto();
    const test = 'test';
    body.firstName = test;
    body.secondName = test;

    const result = await controller.update(
      studentFixture.initialStudent.id,
      body,
    );

    expect(result).toBeTruthy();
  });

  it('should not find a student with unknown id', async () => {
    expect(controller.find(0)).rejects.toBeDefined();
  });

  it('should not update a student with unknown id', async () => {
    const body = new UpdateStudentDto();
    expect(controller.update(0, body)).rejects.toBeDefined();
  });
});
