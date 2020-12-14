import { Component } from '@angular/core';
import { TaskService } from './service/taskService/task.service';
import { CategoryService } from './service/categoryService/category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';

  constructor(public taskService: TaskService, public categoryService: CategoryService) {
    this.categoryService.setTaskService(taskService);
  }
}
