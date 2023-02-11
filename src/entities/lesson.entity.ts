import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsString } from 'class-validator';
import { ILesson } from '../domain/lesson';
import { Timestamp } from './timestamp-entity';
import { Mark } from './mark.entity';
import { Schedule } from './schedule.entity';

@Entity()
export class Lesson extends Timestamp implements ILesson {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @IsString()
  name: string;

  @Column()
  date: string;

  @ManyToOne(() => Schedule, (schedule) => schedule.lessons, {
    onDelete: 'CASCADE',
  })
  schedule: Schedule;

  @OneToMany(() => Mark, (mark) => mark.lesson, { nullable: true })
  marks: Mark[] | null;
}
