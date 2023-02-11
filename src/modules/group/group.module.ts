import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group, Schedule, Student } from '../../entities';
import { GroupService } from './group.service';
import { GroupController } from './group.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Group, Schedule, Student])],
  controllers: [GroupController],
  providers: [GroupService],
  exports: [TypeOrmModule],
})
export class GroupModule {}
