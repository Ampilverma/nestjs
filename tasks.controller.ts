import { Controller, Get, Post, Body } from '@nestjs/common';
import{TasksService} from './tasks.service';
import{Task} from './task.model';
import { create } from 'domain';
@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService){}
    @Get()
    getAllTasks() : Task[]
    {
      return this.tasksService.getAllTasks();
    }

    @Post()
    createTask(
    @Body() body,
    ){
      console.log(body.description);
      console.log(body.description)
      

    // ): Task{
    //  return  this.tasksService.createTask(title,description);
    }
}
