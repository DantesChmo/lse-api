import { ILesson } from './lesson';
import { IStudent } from './student';

export interface IMark {
  id: number;

  value: string;

  lesson: ILesson;

  student: IStudent;
}
