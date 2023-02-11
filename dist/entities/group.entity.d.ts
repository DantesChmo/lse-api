import { IGroup } from '../domain/group';
import { Timestamp } from './timestamp-entity';
import { Student } from './student.entity';
import { Schedule } from './schedule.entity';
export declare class Group extends Timestamp implements IGroup {
    id: number;
    name: string;
    students: Student[] | null;
    schedules: Schedule[] | null;
}
