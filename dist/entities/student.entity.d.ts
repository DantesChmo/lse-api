import { IStudent } from '../domain/student';
import { Timestamp } from './timestamp-entity';
import { Group } from './group.entity';
import { Mark } from './mark.entity';
export declare class Student extends Timestamp implements IStudent {
    id: number;
    firstName: string;
    secondName: string;
    comment: string | null;
    group: Group;
    marks: Mark[] | null;
}
