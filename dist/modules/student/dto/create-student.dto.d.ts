import { IStudent } from '../../../domain/student';
export declare class CreateStudentDto implements Omit<IStudent, 'group' | 'id' | 'marks'> {
    groupId: number;
    firstName: string;
    secondName: string;
    comment: string | null;
}
