import {Injectable} from '@angular/core';
import {Task} from '../model/Task';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddTaskModalComponent} from '../components/task-edit-modal/add-task-modal.component';
import {Priority} from '../model/Priority';
import {Category} from '../model/Category';
import {CategoryService } from './category.service';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private modalService: NgbModal,
              public categoryService: CategoryService) {
  }


  // tslint:disable-next-line:variable-name
  _taskList: Task[] = [
    new Task('Test1', this.categoryService.CATEGORYLIST[0], Priority.low),
    new Task('Test2', this.categoryService.CATEGORYLIST[1], Priority.medium),
    new Task('Test3', this.categoryService.CATEGORYLIST[2], Priority.high)];

  addTask(newEntry: Task): void {
    if (newEntry.title.trim() === '') {
      return;
    }
    // saving new task
    this.taskList.push(new Task(newEntry.title, newEntry.category, newEntry.priority));
  }

  editTask(editEntry: Task, title: string, category: Category, priority: Priority): void {
    for (const task of this.taskList) {
      // get the right task
      if (editEntry.id === task.id) {
        // check whats to edit
        if (title !== '') {
          task.title = title;
        }
        if (category.title !== '') {
          task.category = category;
        }
        if (priority in Priority) {
          task.priority = priority;
        }
      }
    }
  }

  async openTaskEditModal(editEntry: Task): Promise<void> {
    const modalReference = this.modalService.open(AddTaskModalComponent);
    try {
      // get input values from modal via Promise on modal.close
      const result = await modalReference.result;
      // set value from result if they were set
      const title: string = result.title !== '' ? result.title : '';
      const priority: Priority = result.priority in Priority ? result.priority : Priority.low;
      const category: string = result.categoryTitle !== '' ? result.categoryTitle : '';
      // edit the task with the value from modal
      this.editTask(editEntry, title, new Category(category), priority);
    } catch (err) {
      console.log(`something went wrong with the edit. Error: ${err}`);
    }
  }

  doneTask(id: number): void {
    for (const item of this._taskList) {
      if (item.id === id) {
        item.done = !item.done;
      }
    }
  }

  get taskList(): Task[] {
    return this._taskList;
  }

  deleteTask(id: number): void {
    for (let i = 0; i < this._taskList.length; i++) {
      if (this._taskList[i].id === id) {
        this._taskList.splice(i, 1);
      }
    }
  }

}
