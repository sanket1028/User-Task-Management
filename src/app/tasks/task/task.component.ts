import { Component, inject, Input } from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.services';

@Component({
    selector: 'app-task',
    standalone: true,
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
    imports: [CardComponent, DatePipe]
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  // @Output() complete = new EventEmitter<string>();
  private taskSerive = inject(TaskService);

  onCompleteTask() {
    // this.complete.emit(this.task.id);
    this.taskSerive.removeTask(this.task.id)
  }
}
