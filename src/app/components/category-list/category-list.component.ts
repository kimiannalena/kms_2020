import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/Category';

@Component({
  selector: 'app-category-element',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(public categoryService: CategoryService) {
    console.log(categoryService.CATEGORYLIST);
  }
  get categoryList(): Category[] {
    return this.categoryService.CATEGORYLIST;
  }

  ngOnInit(): void {
  }

  delete(id: number): void{
    this.categoryService.deleteCategory(id);
  }
}
