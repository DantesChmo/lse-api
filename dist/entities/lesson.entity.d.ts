import { ILesson } from '../domain/lesson';
import { Timestamp } from './timestamp-entity';
import { Mark } from './mark.entity';
import { Schedule } from './schedule.entity';
export declare class Lesson extends Timestamp implements ILesson {
    id: number;
    name: string;
    date: string;
    schedule: Schedule;
    marks: Mark[] | null;
}
