import { ProcessEntryStatus } from 'src/process/process.helper';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class ProcessEntry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  public_id: string;

  @Column()
  url: string;

  @Column({ enum: ProcessEntryStatus })
  status: ProcessEntryStatus;

  @Column('jsonb', { nullable: true })
  data: object;

  @CreateDateColumn()
  created_at: Date;
}
