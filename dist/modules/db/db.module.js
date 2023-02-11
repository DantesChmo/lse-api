"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("../../entities");
require("dotenv/config");
let DbModule = class DbModule {
};
DbModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.POSTGRES_HOST,
                port: (_a = parseInt(process.env.POSTGRES_PORT, 10)) !== null && _a !== void 0 ? _a : 5432,
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DB,
                keepConnectionAlive: true,
                ssl: {
                    rejectUnauthorized: false,
                },
                autoLoadEntities: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([entities_1.Group, entities_1.Schedule, entities_1.Lesson, entities_1.Mark, entities_1.Student]),
        ],
        exports: [typeorm_1.TypeOrmModule],
    })
], DbModule);
exports.DbModule = DbModule;
//# sourceMappingURL=db.module.js.map