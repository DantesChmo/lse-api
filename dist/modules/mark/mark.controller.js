"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkController = void 0;
const common_1 = require("@nestjs/common");
const mark_service_1 = require("./mark.service");
const create_mark_dto_1 = require("./dto/create-mark.dto");
const update_mark_dto_1 = require("./dto/update-mark.dto");
let MarkController = class MarkController {
    constructor(markService) {
        this.markService = markService;
    }
    create(createMarkDto) {
        return this.markService.create(createMarkDto);
    }
    findAll() {
        return this.markService.findAll();
    }
    findOne(id) {
        return this.markService.findOne(+id);
    }
    update(id, updateMarkDto) {
        return this.markService.update(+id, updateMarkDto);
    }
    remove(id) {
        return this.markService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_mark_dto_1.CreateMarkDto]),
    __metadata("design:returntype", void 0)
], MarkController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MarkController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MarkController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_mark_dto_1.UpdateMarkDto]),
    __metadata("design:returntype", void 0)
], MarkController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MarkController.prototype, "remove", null);
MarkController = __decorate([
    (0, common_1.Controller)('mark'),
    __metadata("design:paramtypes", [mark_service_1.MarkService])
], MarkController);
exports.MarkController = MarkController;
//# sourceMappingURL=mark.controller.js.map