import { Priority } from './Priority';
import {Category} from "./Category";

export class Task {

  constructor(title: string, category: Category, priority: Priority, done?: boolean) { // category?: Category,
    this.title = title;
    this.done = false;
    this.priority = priority;
    this.category = category;
    this.date = new Date();
    this.id = Task.taskCounter++;
  }
  private static taskCounter = 1;
  id: number;
  title: string;
  done: boolean;
  date: Date;
  priority: Priority;
  category: Category

}
