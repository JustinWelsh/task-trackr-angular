import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
@Input() propTask?: Task;
@Output() deleteEvent: EventEmitter<Task> = new EventEmitter()
faTimes = faTimes;

onDelete(task: any) {
  this.deleteEvent.emit(task)
}
}
