import { Fixture } from '../utils/fixture';
declare class StudentFixture extends Fixture {
    initialStudent: {
        id: number;
        firstName: string;
        secondName: string;
        comment: string;
    };
    testStudent: {
        id: number;
        firstName: string;
        secondName: string;
        comment: string;
    };
    flush(): Promise<void>;
    populate(): Promise<void>;
}
export declare const studentFixture: StudentFixture;
export {};
