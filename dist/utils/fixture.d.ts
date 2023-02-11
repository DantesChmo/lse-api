export declare abstract class Fixture {
    protected trunc(tableName: string): Promise<void>;
    closeConnection(): Promise<void>;
    abstract flush(): Promise<void>;
    abstract populate(): Promise<void>;
}
