import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() addTaskEvent: EventEmitter<Task> = new EventEmitter();
  text?: string;
  day?: string;
  reminder: boolean = false;

  onSubmit() {
    if (this.text) {
      const newTask: Task | any = {
        text: this.text,
        day: this.day,
        reminder: this.reminder
      };

      this.addTaskEvent.emit(newTask)

      this.text = '';
      this.day = '';
      this.reminder = false;

    } else alert("Please add a task")

  }
}
