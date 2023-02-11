import { IMark } from '../domain/mark';
import { Timestamp } from './timestamp-entity';
import { Lesson } from './lesson.entity';
import { Student } from './student.entity';
export declare class Mark extends Timestamp implements IMark {
    id: number;
    value: string;
    lesson: Lesson;
    student: Student;
}
