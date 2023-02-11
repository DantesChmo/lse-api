import { IStudent } from './student';
import { ISchedule } from './schedule';
export interface IGroup {
    id: number;
    name: string;
    students: IStudent[] | null;
    schedules: ISchedule[] | null;
}
