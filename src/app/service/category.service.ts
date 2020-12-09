import { Injectable } from '@angular/core';
import {Category} from '../model/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  CATEGORYLIST: Category[] = [new Category('Uni'),
                              new Category('Weihnachten'),
                              new Category('Privat'),
                              new Category('Finanzen')];

  addCategory(newCategory: Category): void {
    if (newCategory.title.trim() === '') { return; }
    this.CATEGORYLIST.push(new Category(newCategory.title));
  }

  get categoryList(): Category[] {
    return this.CATEGORYLIST;
  }

  deleteCategory(id: number):void {
    for (let i = 0; i < this.CATEGORYLIST.length; i++) {
      if (this.CATEGORYLIST[i].id == id) {
        this.CATEGORYLIST.splice(i, 1)
      }
    }
  }

}
