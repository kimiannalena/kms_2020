import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from '../../service/categoryService/category.service';

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.css']
})
export class AddTaskModalComponent implements OnInit {
  public title: string;
  public priority: string;
  public categoryTitle: string;

  constructor(public activeModal: NgbActiveModal,
              public categoryService: CategoryService) {
    this.title = categoryService.taskService.taskToEdit.title;
    this.priority = categoryService.taskService.taskToEdit.priority.toString();
    this.categoryTitle = categoryService.taskService.taskToEdit.category.title;
  }

  save(): void {
    // check if at least one attribute needs an edit
    if (this.title.trim().length > 0 || this.priority.trim().length > 0 || this.categoryTitle.trim().length > 0) {
      this.activeModal.close({title: this.title, categoryTitle: this.categoryTitle, priority: Number(this.priority)});
    }
  }
  ngOnInit(): void {
  }

}
