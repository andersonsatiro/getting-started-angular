import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToDoListService } from './to-do-list.service';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [CommonModule, TasksComponent],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent {
  tasks: any;

  constructor(toDoService: ToDoListService) {
    this.tasks = toDoService.getTasks()
  }
}