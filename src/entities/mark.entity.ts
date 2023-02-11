import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { IMark } from '../domain/mark';
import { Timestamp } from './timestamp-entity';
import { Lesson } from './lesson.entity';
import { Student } from './student.entity';

@Entity()
export class Mark extends Timestamp implements IMark {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  value: string;

  @ManyToOne(() => Lesson, (lesson) => lesson.marks, { onDelete: 'CASCADE' })
  lesson: Lesson;

  @ManyToOne(() => Student, (student) => student.marks, { onDelete: 'CASCADE' })
  student: Student;
}
