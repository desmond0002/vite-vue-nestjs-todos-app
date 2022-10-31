import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todos } from './app.entity';
import { CreateTodoDto } from './create-todo.dto';
import { ITodos } from './types/todos';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Todos)
    private appRepository: Repository<Todos>,
  ) {}

  findAll(): Promise<Todos[]> {
    return this.appRepository.find();
  }

  findOne(id: number): Promise<Todos> {
    return this.appRepository.findOneBy({ id });
  }

  getTodos(): ITodos[] {
    return [
      {
        text: 'some 1',
        done: false,
        date: new Date(),
      },
      {
        text: 'some 2',
        done: false,
        date: new Date(),
      },
      {
        text: 'some 3',
        done: false,
        date: new Date(),
      },
    ];
  }
  pushTodo(createUserDto: CreateTodoDto): Promise<Todos> {
    const todo = new Todos();
    todo.text = createUserDto.text;
    todo.date = createUserDto.date;
    todo.done = createUserDto.done;

    return this.appRepository.save(todo);
  }

  async removeTodo(id: string): Promise<void> {
    await this.appRepository.delete(id);
  }

  async updateTodo({ id, done }) {
    this.appRepository.update({ id }, { done });
  }
}
