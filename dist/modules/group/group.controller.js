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
exports.GroupController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const group_service_1 = require("./group.service");
const create_group_dto_1 = require("./dto/create-group.dto");
const update_group_dto_1 = require("./dto/update-group.dto");
const class_validator_1 = require("class-validator");
const group_dto_1 = require("./dto/group.dto");
let GroupController = class GroupController {
    constructor(groupService) {
        this.groupService = groupService;
    }
    async find(id) {
        const group = await this.groupService.find(id);
        if (group === null) {
            throw new common_1.NotFoundException({
                message: 'Group with current id was not found',
            });
        }
        return group;
    }
    async create(body) {
        var _a;
        const errors = (_a = (await (0, class_validator_1.validate)(body))) !== null && _a !== void 0 ? _a : [];
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints)[0];
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        return this.groupService.create(body);
    }
    async update(id, body) {
        var _a;
        const errors = (_a = (await (0, class_validator_1.validate)(body))) !== null && _a !== void 0 ? _a : [];
        if (errors.length > 0) {
            const errorMessage = Object.values(errors[0].constraints)[0];
            throw new common_1.BadRequestException({ message: errorMessage });
        }
        const result = await this.groupService.update(id, body);
        if (result === false) {
            throw new common_1.NotFoundException({
                message: 'The requested group was not found',
            });
        }
        return result;
    }
};
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOkResponse)({
        description: 'The group has been found',
        type: group_dto_1.GroupDto,
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Group with current id was not found',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "find", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The group has been successfully created',
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'One or more parameters were incorrect',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_group_dto_1.CreateGroupDto]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOkResponse)({
        description: 'The group has been successfully updated',
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'One or more parameters were incorrect',
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'The requested group was not found',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_group_dto_1.UpdateGroupDto]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "update", null);
GroupController = __decorate([
    (0, swagger_1.ApiTags)('Group'),
    (0, common_1.Controller)('group'),
    __metadata("design:paramtypes", [group_service_1.GroupService])
], GroupController);
exports.GroupController = GroupController;
//# sourceMappingURL=group.controller.js.map