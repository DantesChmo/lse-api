"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeConnection = exports.selectFromDb = exports.truncateDb = exports.populateDb = void 0;
const typeorm_1 = require("typeorm");
async function populateDb(entity, value) {
    const result = await (0, typeorm_1.getConnection)()
        .createQueryBuilder()
        .insert()
        .into(entity)
        .values(value)
        .execute();
    return result.identifiers[0];
}
exports.populateDb = populateDb;
async function truncateDb(entity) {
    await (0, typeorm_1.getConnection)().createQueryBuilder().delete().from(entity).execute();
}
exports.truncateDb = truncateDb;
async function selectFromDb(entity, where, whereValue) {
    const [alias] = where.split('.');
    return await (0, typeorm_1.getConnection)()
        .createQueryBuilder()
        .select(alias)
        .from(entity, alias)
        .where(where, whereValue)
        .getOne();
}
exports.selectFromDb = selectFromDb;
async function closeConnection() {
    await (0, typeorm_1.getConnection)().close();
}
exports.closeConnection = closeConnection;
//# sourceMappingURL=fixture-db.js.map