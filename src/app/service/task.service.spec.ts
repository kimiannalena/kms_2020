import {ComponentFixture, getTestBed, inject, TestBed} from '@angular/core/testing';
import {Task} from '../model/Task';

import {TaskService} from './task.service';
import {Category} from '../model/Category';
import {Priority} from '../model/Priority';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CategoryService} from './category.service';

let testService: TaskService;


describe('TaskService', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers:    [TaskService],
      imports:      [NgbModal, CategoryService]
    })
      .compileComponents();
    testService = TestBed.get(TaskService);
  });

  it('should ...', inject([TaskService], (service: TaskService) => {
    expect(service).toBeTruthy();
  }));

  describe('should get full tasklist', () => {

    it('should return empty array if list is empty', inject([TaskService], (service: TaskService) => {
      expect(service.taskList).toEqual([]);
    }));

    it('should return a list of task objects if there are any', inject([TaskService], (service: TaskService) => {
      const task1: Task = new Task('test1', new Category('Privat'), Priority.low, false);
      const task2: Task = new Task('test2', new Category('Privat'), Priority.low, false);
      service.addTask(task1);
      service.addTask(task2);
      expect(service.taskList).toEqual([task1, task2]);
    }));
  });

  describe('should mark a task as done', () => {

    it('should mark a undone task to done', inject([TaskService], (service: TaskService) => {
      const task: Task = new Task('test1', new Category('Privat'), Priority.low, false);
      service.addTask(task);
      service.doneTask(task.id);
      expect(task.done).toEqual(true);
    }));

    it('should mark a done task to undone', inject([TaskService], (service: TaskService) => {
      const task: Task = new Task('test1', new Category('Privat'), Priority.low, true);
      service.addTask(task);
      service.doneTask(task.id);
      expect(task.done).toEqual(false);
    }));
  });
});
