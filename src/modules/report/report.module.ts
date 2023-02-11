import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group, Schedule, Mark, Lesson, Student } from '../../entities';
import { ReportController } from './report.controller';
import { ReportService } from './report.service';

@Module({
  imports: [TypeOrmModule.forFeature([Group, Schedule, Mark, Lesson, Student])],
  controllers: [ReportController],
  providers: [ReportService],
  exports: [TypeOrmModule],
})
export class ReportModule {}
