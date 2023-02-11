"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMarkDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_mark_dto_1 = require("./create-mark.dto");
class UpdateMarkDto extends (0, swagger_1.PartialType)(create_mark_dto_1.CreateMarkDto) {
}
exports.UpdateMarkDto = UpdateMarkDto;
//# sourceMappingURL=update-mark.dto.js.map