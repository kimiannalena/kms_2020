import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../model/Category';
import { CategoryService } from "../service/category.service";
import { Task } from "../model/Task";


@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {
  transform(taskList: Task[], clickedCategories: Category[]): any {
    console.log('cat works')
    let resultList: Task[] = taskList;

  }

}
