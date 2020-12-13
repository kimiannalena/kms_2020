import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TaskService } from '../../service/taskService/task.service';
import { CategoryService } from '../../service/categoryService/category.service';
import { Task } from '../../model/Task';
import { Priority } from '../../model/Priority';
import { Category } from '../../model/Category';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css']
})
export class TaskInputComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  public title: string;
  public priority: Priority;
  public categoryTitle: string;


  public newEntry = new Task('', new Category(''), Priority.low);
  constructor(public taskService: TaskService,
              public categoryService: CategoryService) {
    // empty field
    this.title = '';
    this.priority = Priority.low;
    this.categoryTitle = '';
  }

  ngOnInit(): void {
  }

  // submitting the form
  onSubmit(): void {
    // call service
    this.newEntry.title = this.title;
    this.newEntry.priority = this.priority;
    this.newEntry.category = new Category(this.categoryTitle);
    this.taskService.addTask(this.newEntry);
    // @ts-ignore
    document.getElementById('taskInput').value = '';
    // @ts-ignore
    document.getElementById('taskCategoryInput').value = '';
  }
}
