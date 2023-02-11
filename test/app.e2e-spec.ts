import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import type { Test as SuperTest } from 'supertest';
import { AppModule } from './../src/app.module';

const cases = [
  ['Get /group', 200],
  ['Post /group', 200],
  ['Put /group/:id', 200],

  ['Get /schedule?groupId=<>', 200],
  ['Get /schedule/short?groupId=<>', 200],
  ['Post /schedule?groupId=<>', 200],
  ['Put /schedule/:id', 200],

  ['Get /student?groupId=<>', 200],
  ['Post /student?groupId=<>', 200],
  ['Put /student/:id', 200],

  ['Get /lesson?scheduleId=<>', 200],
  ['Post /lesson?scheduleId=<>', 200],
  ['Put /lesson/:id', 200],

  ['Get /report', 200],

  ['Post /mark?studentId=<>&lessonId=<>', 200],

  ['GET /report', 200],
];

describe.skip('Application (e2e)', () => {
  let app: INestApplication;
  let req: ReturnType<typeof request>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    req = request(app.getHttpServer());
  });

  it('(GET) /', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it.each(cases)('%s', (str: string, expected: number) => {
    const [method, uri] = str.split(' ');

    const reqWithMethod: SuperTest = req[method.toLocaleLowerCase()](uri);
    return reqWithMethod.expect(expected);
  });
});
