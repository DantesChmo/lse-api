import { Fixture } from '../utils/fixture';
import { Group } from '../entities';
declare class GroupFixture extends Fixture {
    initialGroup: {
        id: number;
        name: string;
    };
    testGroup: {
        id: number;
        name: string;
    };
    findInitialGroup(): Promise<Group>;
    findTestGroup(): Promise<Group>;
    flush(): Promise<void>;
    populate(): Promise<void>;
    createTest(): Promise<void>;
}
export declare const groupFixture: GroupFixture;
export {};
