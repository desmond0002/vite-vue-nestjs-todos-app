import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ITodos } from './types/todos';
import { CreateTodoDto } from './create-todo.dto';
import { Todos } from './app.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/getMocks')
  getTodos(): ITodos[] {
    return this.appService.getTodos();
  }

  @Post('/pushTodo')
  create(@Body() createUserDto: CreateTodoDto): Promise<Todos> {
    return this.appService.pushTodo(createUserDto);
  }

  @Get('/getTodos')
  findAll(): Promise<Todos[]> {
    return this.appService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Todos> {
    return this.appService.findOne(id);
  }

  @Delete('/:id')
  removeTodo(@Param('id') id: string): Promise<void> {
    return this.appService.removeTodo(id);
  }

  @Post('/update')
  updateTodo(@Body() props: { id: string; done: boolean }): Promise<void> {
    return this.appService.updateTodo(props);
  }
}
