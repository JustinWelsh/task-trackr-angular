import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {

    this.renderTasks();
  }

  renderTasks() {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks.reverse())
  }

  handleDeleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(
      () => this.tasks = this.tasks.filter(t => t.id !== task.id)
    )
  }

  handleReminderToggle(task: Task) {
    task.reminder = !task.reminder
    this.taskService.updateTaskReminder(task).subscribe()
  }

  handleAddTask(event: any) {
    this.taskService.addNewTask(event).subscribe(
      () => this.tasks.unshift(event)
    )
    this.renderTasks();
  }
}
