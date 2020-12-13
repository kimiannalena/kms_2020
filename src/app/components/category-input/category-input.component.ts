import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Category} from '../../model/Category';
import {CategoryService} from '../../service/categoryService/category.service';

@Component({
  selector: 'app-category-input',
  templateUrl: './category-input.component.html',
  styleUrls: ['./category-input.component.css']
})
export class CategoryInputComponent implements OnInit {
  @Output() addCategory: EventEmitter<any> = new EventEmitter();

  public title: string;
  public newCategory = new Category('');

  constructor(public categoryService: CategoryService) {
    this.title = '';
  }

  ngOnInit(): void {
  }

  onSubmitC(): void {
    // call service
    this.newCategory.title = this.title;
    this.categoryService.addCategory(this.newCategory);
    // @ts-ignore
    document.getElementById('categoryInput').value = '';
  }
}
