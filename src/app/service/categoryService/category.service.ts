import { Injectable } from '@angular/core';
import { Category } from '../../model/Category';
import { testCat1, testCat2, testCat3, testCat4, testCat5} from '../../model/mocks/categoryMock';
import { TaskService } from '../taskService/task.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor() {
  }
  CATEGORYLIST: Category[] = [testCat1, testCat2, testCat3, testCat4, testCat5];

  categoriesClicked: Category[] = [];

  taskService: any;

  setTaskService(taskService: TaskService): void {
    this.taskService = taskService;
  }

  addCategory(newCategory: Category): void {
    if (newCategory.title.trim() === '') {
      return;
    }
    this.CATEGORYLIST.push(new Category(newCategory.title));
  }

  get categoryList(): Category[] {
    return this.CATEGORYLIST;
  }

  deleteCategory(id: number): void {
    for (let i = 0; i < this.CATEGORYLIST.length; i++) {
      if (this.CATEGORYLIST[i].id === id) {
        this.CATEGORYLIST.splice(i, 1);
      }
    }
  }

  toggleCatInCategoriesClicked(id: number): void {
    for (const cat of this.CATEGORYLIST) {
      if (cat.id === id) {
        if (!this.categoriesClicked.includes(cat)) {
          this.categoriesClicked.push(cat);
        } else if (this.categoriesClicked.includes(cat)) {
          this.categoriesClicked.splice(this.categoriesClicked.indexOf(cat), 1);
        }
      }
    }
    console.log(this.categoriesClicked);



  }


  filterCategories(): void {

  }
}
