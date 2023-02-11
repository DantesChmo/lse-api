"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupFixtures = void 0;
const entities_1 = require("../entities");
class GroupFixtures extends entities_1.Group {
    constructor(params) {
        super();
        if (params.id !== undefined) {
            this.id = params.id;
        }
        if (params.name !== undefined) {
            this.id = params.id;
        }
    }
}
exports.GroupFixtures = GroupFixtures;
//# sourceMappingURL=group_new.js.map