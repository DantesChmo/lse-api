"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentFixture = void 0;
const typeorm_1 = require("typeorm");
const fixture_1 = require("../utils/fixture");
const entities_1 = require("../entities");
class StudentFixture extends fixture_1.Fixture {
    constructor() {
        super(...arguments);
        this.initialStudent = {
            id: 1,
            firstName: 'Initial',
            secondName: 'Laitini',
            comment: 'Hello World!',
        };
        this.testStudent = {
            id: 2,
            firstName: 'Test',
            secondName: 'Tset',
            comment: 'Hello World Test!',
        };
    }
    async flush() {
        await this.trunc('student');
    }
    async populate() {
        await (0, typeorm_1.getConnection)()
            .createQueryBuilder()
            .insert()
            .into(entities_1.Student)
            .values(this.initialStudent)
            .execute();
    }
}
exports.studentFixture = new StudentFixture();
//# sourceMappingURL=student.js.map