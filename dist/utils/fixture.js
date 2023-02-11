"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fixture = void 0;
const typeorm_1 = require("typeorm");
class Fixture {
    async trunc(tableName) {
        console.log(tableName);
        await (0, typeorm_1.getConnection)().query(`TRUNCATE TABLE "${tableName}" RESTART IDENTITY CASCADE`);
    }
    async closeConnection() {
        await (0, typeorm_1.getConnection)().close();
    }
}
exports.Fixture = Fixture;
//# sourceMappingURL=fixture.js.map