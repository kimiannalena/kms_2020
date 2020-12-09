import {Component, OnInit} from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Task } from '../../model/Task';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent implements OnInit {

  public searchText: string;

  constructor(public taskService: TaskService) {
    this.searchText = '';
    console.log(taskService.taskList);
  }

  openEditModal(editEntry: Task): void {
    this.taskService.openTaskEditModal(editEntry).then();
  }

  ngOnInit(): void {
  }

  done(id: number): void{
    this.taskService.doneTask(id);
  }

  delete(id: number): void{
    this.taskService.deleteTask(id);
  }

  get _taskList(): Task[] {
    return this.taskService.taskList;
  }

}
