import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  date: string;

  @Column({ default: true })
  done: boolean;
}
