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
exports.Mark = void 0;
const typeorm_1 = require("typeorm");
const timestamp_entity_1 = require("./timestamp-entity");
const lesson_entity_1 = require("./lesson.entity");
const student_entity_1 = require("./student.entity");
let Mark = class Mark extends timestamp_entity_1.Timestamp {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Mark.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Mark.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => lesson_entity_1.Lesson, (lesson) => lesson.marks, { onDelete: 'CASCADE' }),
    __metadata("design:type", lesson_entity_1.Lesson)
], Mark.prototype, "lesson", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => student_entity_1.Student, (student) => student.marks, { onDelete: 'CASCADE' }),
    __metadata("design:type", student_entity_1.Student)
], Mark.prototype, "student", void 0);
Mark = __decorate([
    (0, typeorm_1.Entity)()
], Mark);
exports.Mark = Mark;
//# sourceMappingURL=mark.entity.js.map