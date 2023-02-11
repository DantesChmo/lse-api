import { getConnection } from 'typeorm';
import { Fixture } from '../utils/fixture';
import { Student } from '../entities';

class StudentFixture extends Fixture {
  initialStudent = {
    id: 1,
    firstName: 'Initial',
    secondName: 'Laitini',
    comment: 'Hello World!',
  };

  testStudent = {
    id: 2,
    firstName: 'Test',
    secondName: 'Tset',
    comment: 'Hello World Test!',
  };

  async flush(): Promise<void> {
    await this.trunc('student');
  }

  async populate(): Promise<void> {
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Student)
      .values(this.initialStudent)
      .execute();
  }
}

export const studentFixture = new StudentFixture();

/*import { initialGroup } from './group';

export const initialStudentId = 1;
export const testId = 1;

export const initialStudent = {
  id: initialStudentId,
  firstName: 'Initial',
  secondName: 'Laitini',
  comment: 'Hello world',
  marks: null,
  group: initialGroup,
};

export const testStudent = {
  id: testId,
  groupId: initialGroup.id,
  firstName: 'Test',
  secondName: 'Tset',
  comment: 'Hello world test!',
};
*/
