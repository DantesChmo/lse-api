import { getConnection } from 'typeorm';
import { Fixture } from '../utils/fixture';
import { Group } from '../entities';

class GroupFixture extends Fixture {
  initialGroup = {
    id: 1,
    name: 'initial',
  };

  testGroup = {
    id: 2,
    name: 'test',
  };

  async findInitialGroup(): Promise<Group> {
    const result: Group = await getConnection().query(
      `SELECT * FROM "group" WHERE "name" = $1`,
      [this.initialGroup.name],
    );

    return result[0];
  }

  async findTestGroup(): Promise<Group> {
    const result: Group = await getConnection().query(
      `SELECT "name" FROM "group" WHERE "name" = $1`,
      [this.testGroup.name],
    );

    return result[0];
  }

  async flush(): Promise<void> {
    await this.trunc('group');
  }

  async populate(): Promise<void> {
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Group)
      .values(this.initialGroup)
      .execute();
  }

  async createTest(): Promise<void> {
    const entity = new Group();
    entity.name = this.testGroup.name;

    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Group)
      .values(entity)
      .execute();
  }
}

export const groupFixture = new GroupFixture();
