import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { IGroup } from '../domain/group';
import { Timestamp } from './timestamp-entity';
import { Student } from './student.entity';
import { Schedule } from './schedule.entity';

@Entity()
export class Group extends Timestamp implements IGroup {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Student, (student) => student.group, { nullable: true })
  students: Student[] | null;

  @OneToMany(() => Schedule, (schedule) => schedule.group, { nullable: true })
  schedules: Schedule[] | null;
}
