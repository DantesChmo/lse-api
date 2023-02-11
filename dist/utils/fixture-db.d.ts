import { EntityTarget } from 'typeorm';
export declare function populateDb<T>(entity: EntityTarget<T>, value: any): Promise<T>;
export declare function truncateDb<T>(entity: EntityTarget<T>): Promise<void>;
export declare function selectFromDb<T>(entity: EntityTarget<T>, where: string, whereValue: any): Promise<T>;
export declare function closeConnection(): Promise<void>;
