import {Pipe, PipeTransform} from '@angular/core';
import {Task} from '../../model/Task';
import {Category} from '../../model/Category';
import {Priority} from '../../model/Priority';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipeMock implements PipeTransform {

  transform(list: Task[], searchText: string, clickedCategories: Category[], searchFlag: boolean, catFlag: boolean): any {
    let testCat1: Category = new Category('Privat');
    let testCat2: Category = new Category('Arbeit');
    let testTask1: Task = new Task('Einkaufen', testCat1, Priority.high);
    let testTask2: Task = new Task('Date', testCat1, Priority.low);
    let testTask3: Task = new Task('Hausaufgaben', testCat2, Priority.low);
    let mockList: Task[] = [testTask1, testTask2, testTask3];
    let mockSearchText: string = 'Date';
    let mockClickedCategories: Category[] = [testCat1];

    list = mockList;
    searchText = mockSearchText;
    clickedCategories = mockClickedCategories;
    searchFlag = true;
    catFlag = true;

    const searchString: string = searchText.trim().toLocaleLowerCase();

    let resultList: Task[] = list;
    if (searchFlag) {
       resultList = resultList.filter(task => task.title.toLocaleLowerCase().indexOf(searchString) !== -1);
    }
    if (catFlag) {
      resultList = resultList.filter(task => clickedCategories.includes(task.category));
    }
    return resultList;
  }
}
