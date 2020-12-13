import {Injectable} from '@angular/core';
import {Task} from '../../../model/Task';
import {Priority} from '../../../model/Priority';
import {Category} from '../../../model/Category';
import {taskListMock} from '../../../model/mocks/taskMock';


@Injectable({
  providedIn: 'root'
})
export class TaskServiceMock {

  constructor() {
  }


  // tslint:disable-next-line:variable-name
  _taskList: Task[] = taskListMock;

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

  async openTaskEditModal(editEntry: Task, givenTitle: string, givenPriority: Priority, givenCatTitle: string): Promise<void> {
    try {
      const title: string = givenTitle !== '' ? givenTitle : '';
      const priority: Priority = givenPriority in Priority ? givenPriority : Priority.low;
      const category: string = givenCatTitle !== '' ? givenCatTitle : '';
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
