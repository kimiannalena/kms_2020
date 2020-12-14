import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../../model/Task';
import { Category } from '../../model/Category';

@Pipe({
  name: 'searchFilter',
  pure: false
})
export class SearchFilterPipe implements PipeTransform {

  transform(list: Task[], searchText: string, clickedCategories: Category[], searchFlag: boolean, catFlag: boolean): any {

    const searchString: string = searchText.trim().toLocaleLowerCase();
    let resultList: Task[] = list;
    if (searchFlag) {
       resultList = resultList.filter(task => task.title.toLocaleLowerCase().indexOf(searchString) !== -1);
    }
    if (catFlag) {
      resultList = resultList.filter(task => {
        return clickedCategories.includes(task.category);
      });
    }
    return resultList;
  }
}
