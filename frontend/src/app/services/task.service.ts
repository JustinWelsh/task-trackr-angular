import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl: string = 'http://localhost:5000/tasks'

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTask(task: Task): Observable<Task> {
    const newUrl = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(newUrl)
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const newUrl = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(newUrl, task)
  }

  addNewTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task)
  }
}
