import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TaskInputComponent } from './components/task-input/task-input.component';
import { TaskTableComponent } from './components/task-table/task-table.component';
import { AddTaskModalComponent } from './components/task-edit-modal/add-task-modal.component';
import { CategoryInputComponent } from './components/category-input/category-input.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { PriorityPipe } from './pipes/priority.pipe';
import { SearchFilterPipe } from './pipes/search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TaskInputComponent,
    TaskTableComponent,
    AddTaskModalComponent,
    CategoryInputComponent,
    CategoryListComponent,
    PriorityPipe,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
