import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTableComponent } from './task-table.component';
import {SearchFilterPipeMock} from '../../pipes/search-filter/search-filterTest/search-filter.pipe.mock';

describe('TaskTableComponent', () => {
  let component: TaskTableComponent;
  let fixture: ComponentFixture<TaskTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskTableComponent,
                      SearchFilterPipeMock ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
