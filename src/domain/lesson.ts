import { ISchedule } from './schedule';
import { IMark } from './mark';

export interface ILesson {
  id: number;

  name: string;

  date: string;

  schedule: ISchedule;

  marks: IMark[] | null;
}
