import { Task } from '../Task';
import { Priority } from '../Priority';
import { testCat0, testCat1, testCat2, testCat3, testCat4, testCat5 } from './categoryMock';

const testTask0: Task = new Task('Hausübung', testCat3, Priority.medium);
const testTask1: Task = new Task('Einkaufen', testCat1, Priority.high);
const testTask2: Task = new Task('Treffen', testCat5, Priority.low);
const testTask3: Task = new Task('Putzen', testCat1, Priority.low);
const testTask4: Task = new Task('Essen', testCat1, Priority.medium);
const testTask5: Task = new Task('Geschenke', testCat4, Priority.medium);
const testTask6: Task = new Task('Kochen', testCat2, Priority.high);
const testTask7: Task = new Task('Joggen', testCat2, Priority.medium);
const testTask8: Task = new Task('Garten', testCat2, Priority.medium);
const testTask9: Task = new Task('Müll', testCat2, Priority.low);
console.log(testTask1.priority);
export let taskListMock: Task[] =
  [testTask0, testTask1, testTask2, testTask3, testTask4, testTask5, testTask6, testTask7, testTask8, testTask9];

