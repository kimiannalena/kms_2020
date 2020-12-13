import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {Task} from '../../../model/Task';

import {TaskService} from '../task.service';
import {Category} from '../../../model/Category';
import {Priority} from '../../../model/Priority';

import {TaskServiceMock} from './task.service.mock';
import {taskListMock} from '../../../model/mocks/taskMock';



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
  afterEach( () => {
    testService = new TaskServiceMock();
  });

  it('should be created', waitForAsync( () => {
    expect(testService).toBeTruthy();
  }));

  describe('should get full tasklist', () => {

    it('should return empty array if list is empty',  waitForAsync( ()  => {
      testService._taskList = [];
      expect(testService.taskList).toEqual([]);
    }));

    it('should return a list of task objects if there are any',  waitForAsync( ()  => {
      testService._taskList = [];
      const task1: Task = taskListMock[2];
      const task2: Task = taskListMock[3];
      testService._taskList = [task1, task2];
      expect(testService.taskList).toEqual([task1, task2]);
    }));
  });

  describe('should mark a task as done', () => {
    // the done flag is false on default cause u cant create an already done task ... duh
    it('should mark a undone task to done',  waitForAsync( ()  => {
      const testTask: Task = taskListMock[5];
      const testTaskDoneFlagAtStart: boolean = testTask.done;
      testService.addTask(testTask);
      testService.doneTask(testTask.id);
      expect(testTask.done).toEqual(!testTaskDoneFlagAtStart);
    }));

    it('should mark a done task to undone',  waitForAsync( ()  => {
      const testTask: Task = taskListMock[4];
      testTask.done = true;
      const testTaskDoneFLagAtStart: boolean = testTask.done;
      testService.addTask(testTask);
      testService.doneTask(testTask.id);
      expect(testTask.done).toEqual(!testTaskDoneFLagAtStart);
    }));
  });
});
