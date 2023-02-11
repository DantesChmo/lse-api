import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class Timestamp {
  @CreateDateColumn()
  protected createdAt: Date;

  @UpdateDateColumn()
  protected updatedAt: Date;
}
