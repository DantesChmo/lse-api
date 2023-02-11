import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { IStudent } from '../domain/student';
import { Timestamp } from './timestamp-entity';
import { Group } from './group.entity';
import { Mark } from './mark.entity';

@Entity()
export class Student extends Timestamp implements IStudent {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  firstName: string;

  @Column()
  secondName: string;

  @Column({ nullable: true })
  comment: string | null;

  @ManyToOne(() => Group, (group) => group.students, { onDelete: 'CASCADE' })
  group: Group;

  @OneToMany(() => Mark, (mark) => mark.student, { nullable: true })
  marks: Mark[] | null;
}
