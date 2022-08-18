import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDTO } from './dto/create-task.dto';
import { GetTasksFilterDTO } from './dto/get-task-filter.dto';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  @InjectRepository(Task)
  private taskRepository: Repository<Task>;

  // public async getTasksWithFilters(filterDTO: GetTasksFilterDTO): void {
  //   const { status, search } = filterDTO;

  //   let tasks = this.getAllTasks();

  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }

  //   if (search) {
  //     tasks = tasks.filter((task) => {
  //       if (
  //         task.title.toLowerCase().includes(search.toLowerCase()) ||
  //         task.description.toLowerCase().includes(search.toLowerCase())
  //       ) {
  //         return true;
  //       }
  //     });
  //   }

  //   return tasks;
  // }

  // public getAllTasks(): Task[] {
  //   return this.tasks;
  // }

  // public createTask(createTaskDto: CreateTaskDTO): Task {
  //   const { title, description } = createTaskDto;

  //   const task: Task = {
  //     id: uuid(),
  //     title: title,
  //     description: description,
  //     status: TaskStatus.OPEN,
  //   };

  //   this.tasks.push(task);

  //   return task;
  // }

  // public async getTaskById(id: string): Promise<Task> {
  //   return this.taskRepository.findOneBy({ id: id });
  // }

  // public removeTaskById(id: string) {
  //   const removedTask = this.getTaskById(id);

  //   this.tasks = this.tasks.filter((task) => task !== this.getTaskById(id));

  //   return removedTask;
  // }

  // public updateTaskStatusById(id: string, status: TaskStatus): Task {
  //   const taskToBeUpdated = this.getTaskById(id);
  //   taskToBeUpdated.status = status;

  //   return taskToBeUpdated;
  // }
}
