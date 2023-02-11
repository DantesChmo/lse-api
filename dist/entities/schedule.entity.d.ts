import { ISchedule } from '../domain/schedule';
import { Weekdays } from '../constants/weekdays';
import { Timestamp } from './timestamp-entity';
import { Group } from './group.entity';
import { Lesson } from './lesson.entity';
export declare class Schedule extends Timestamp implements ISchedule {
    id: number;
    from: string;
    to: string;
    weekdays: Weekdays[];
    lessons: Lesson[] | null;
    group: Group;
}
