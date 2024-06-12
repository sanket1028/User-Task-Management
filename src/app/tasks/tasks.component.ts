import { Component, Input, input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from './task/task.model';
import { TaskService } from './tasks.services';

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {
  // name = input.required<string>(); // with signal input
  @Input({ required: true }) name!: string;
  @Input({ required: true }) id!: string;
  isAddingTask = false;
  
  constructor(private taskService: TaskService) {}

  get selectedUserTasks() {
    return this.taskService.getUserTaks(this.id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCloseAddTask(){
    this.isAddingTask = false;
  }
  
}
 