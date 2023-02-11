import { Module } from '@nestjs/common';
import { DbModule } from './modules/db';
import { GroupModule } from './modules/group/group.module';
import { LessonModule } from './modules/lesson/lesson.module';
import { StudentModule } from './modules/student/student.module';
import { MarkModule } from './modules/mark/mark.module';
import { ReportModule } from './modules/report/report.module';

@Module({
  imports: [
    DbModule,
    GroupModule,
    LessonModule,
    StudentModule,
    MarkModule,
    ReportModule,
  ],
})
export class AppModule {}
