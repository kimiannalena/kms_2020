import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {Task} from '../../../model/Task';

import {TaskService} from '../task.service';
import {Category} from '../../../model/Category';
import {Priority} from '../../../model/Priority';

import {TaskServiceMock} from './task.service.mock';



describe('TaskService', () => {
  let testService: TaskServiceMock;
  // let fixture: ComponentFixture<TaskService>;
  // beforeEach(waitForAsync( () => {
  //   TestBed.configureTestingModule({
  //     providers: [
  //       {
  //         provide: TaskService,
  //         useClass: TaskServiceMock
  //       }
  //     ],
  //   }).compileComponents();
  // }));
  //
  // beforeEach(waitForAsync( () => {
  //   fixture = TestBed.createComponent(TaskService);
  //   testService = fixture.componentInstance;
  //   fixture.detectChanges();
  // }));
  beforeEach( () => { testService = new TaskServiceMock(); });

  it('should be created', waitForAsync( () => {
    expect(testService).toBeTruthy();
  }));

  describe('should get full tasklist', () => {

    it('should return empty array if list is empty',  waitForAsync( ()  => {
      expect(testService.taskList).toEqual([]);
    }));

    it('should return a list of task objects if there are any',  waitForAsync( ()  => {
      const task1: Task = new Task('test1', new Category('Privat'), Priority.low, false);
      const task2: Task = new Task('test2', new Category('Privat'), Priority.low, false);
      testService.addTask(task1);
      testService.addTask(task2);
      expect(testService.taskList).toEqual([task1, task2]);
    }));
  });

  describe('should mark a task as done', () => {

    it('should mark a undone task to done',  waitForAsync( ()  => {
      const task: Task = new Task('test1', new Category('Privat'), Priority.low, false);
      testService.addTask(task);
      testService.doneTask(task.id);
      expect(task.done).toEqual(true);
    }));

    it('should mark a done task to undone',  waitForAsync( ()  => {
      const task: Task = new Task('test1', new Category('Privat'), Priority.low, true);
      testService.addTask(task);
      testService.doneTask(task.id);
      expect(task.done).toEqual(false);
    }));
  });
});
