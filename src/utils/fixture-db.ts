import { EntityTarget, getConnection } from 'typeorm';

export async function populateDb<T>(
  entity: EntityTarget<T>,
  value: any,
): Promise<T> {
  const result = await getConnection()
    .createQueryBuilder()
    .insert()
    .into(entity)
    .values(value)
    .execute();

  return result.identifiers[0] as T;
}

export async function truncateDb<T>(entity: EntityTarget<T>): Promise<void> {
  await getConnection().createQueryBuilder().delete().from(entity).execute();
}

export async function selectFromDb<T>(
  entity: EntityTarget<T>,
  where: string,
  whereValue: any,
): Promise<T> {
  const [alias] = where.split('.');

  return await getConnection()
    .createQueryBuilder()
    .select(alias)
    .from(entity, alias)
    .where(where, whereValue)
    .getOne();
}

export async function closeConnection() {
  await getConnection().close();
}
