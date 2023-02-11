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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schedule = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const weekdays_1 = require("../constants/weekdays");
const timestamp_entity_1 = require("./timestamp-entity");
const group_entity_1 = require("./group.entity");
const lesson_entity_1 = require("./lesson.entity");
let Schedule = class Schedule extends timestamp_entity_1.Timestamp {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Schedule.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], Schedule.prototype, "from", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], Schedule.prototype, "to", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { array: true }),
    (0, class_validator_1.IsEnum)(weekdays_1.Weekdays, { each: true }),
    __metadata("design:type", Array)
], Schedule.prototype, "weekdays", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => lesson_entity_1.Lesson, (lesson) => lesson.schedule, { nullable: true }),
    __metadata("design:type", Array)
], Schedule.prototype, "lessons", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => group_entity_1.Group, (group) => group.schedules, { onDelete: 'CASCADE' }),
    __metadata("design:type", group_entity_1.Group)
], Schedule.prototype, "group", void 0);
Schedule = __decorate([
    (0, typeorm_1.Entity)()
], Schedule);
exports.Schedule = Schedule;
//# sourceMappingURL=schedule.entity.js.map