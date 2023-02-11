import { Weekdays } from '../constants/weekdays';
import { ILesson } from './lesson';
import { IGroup } from './group';

export interface ISchedule {
  id: number;

  from: string;

  to: string;

  weekdays: Weekdays[];

  lessons: ILesson[] | null;

  group: IGroup;
}
