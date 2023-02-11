import { getConnection } from 'typeorm';

export abstract class Fixture {
  protected async trunc(tableName: string): Promise<void> {
    await getConnection().query(
      `TRUNCATE TABLE "${tableName}" RESTART IDENTITY CASCADE`,
    );
  }

  async closeConnection(): Promise<void> {
    await getConnection().close();
  }

  abstract flush(): Promise<void>;

  abstract populate(): Promise<void>;
}
