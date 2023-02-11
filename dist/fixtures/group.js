"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupFixture = void 0;
const typeorm_1 = require("typeorm");
const fixture_1 = require("../utils/fixture");
const entities_1 = require("../entities");
class GroupFixture extends fixture_1.Fixture {
    constructor() {
        super(...arguments);
        this.initialGroup = {
            id: 2,
            name: 'initial 2',
        };
        this.testGroup = {
            id: 2,
            name: 'test',
        };
    }
    async findInitialGroup() {
        const result = await (0, typeorm_1.getConnection)().query(`SELECT * FROM "group" WHERE "name" = $1`, [this.initialGroup.name]);
        return result[0];
    }
    async findTestGroup() {
        const result = await (0, typeorm_1.getConnection)().query(`SELECT "name" FROM "group" WHERE "name" = $1`, [this.testGroup.name]);
        return result[0];
    }
    async flush() {
        await this.trunc('group');
    }
    async populate() {
        await (0, typeorm_1.getConnection)()
            .createQueryBuilder()
            .insert()
            .into(entities_1.Group)
            .values(this.initialGroup)
            .execute();
    }
    async createTest() {
        const entity = new entities_1.Group();
        entity.name = this.testGroup.name;
        await (0, typeorm_1.getConnection)()
            .createQueryBuilder()
            .insert()
            .into(entities_1.Group)
            .values(entity)
            .execute();
    }
}
exports.groupFixture = new GroupFixture();
//# sourceMappingURL=group.js.map