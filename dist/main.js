"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const group_1 = require("./fixtures/group");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('School magazine api')
        .setDescription('The api for school magazine')
        .setVersion('1.0')
        .addServer('http://localhost:3000')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors({ origin: 'http://localhost:8080' });
    await group_1.groupFixture.populate();
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map