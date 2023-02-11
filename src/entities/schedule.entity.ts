import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { IsDateString, IsEnum } from 'class-validator';
import { ISchedule } from '../domain/schedule';
import { Weekdays } from '../constants/weekdays';
import { Timestamp } from './timestamp-entity';
import { Group } from './group.entity';
import { Lesson } from './lesson.entity';

@Entity()
export class Schedule extends Timestamp implements ISchedule {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @IsDateString()
  from: string;

  @Column()
  @IsDateString()
  to: string;

  @Column('varchar', { array: true })
  @IsEnum(Weekdays, { each: true })
  weekdays: Weekdays[];

  @OneToMany(() => Lesson, (lesson) => lesson.schedule, { nullable: true })
  lessons: Lesson[] | null;

  @ManyToOne(() => Group, (group) => group.schedules, { onDelete: 'CASCADE' })
  group: Group;
}
