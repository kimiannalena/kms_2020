import {Pipe, PipeTransform} from '@angular/core';
import {Task} from '../model/Task';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(list: Task[], searchText: string): any {
    let searchString: string = searchText.trim().toLocaleLowerCase();
    if (!list || !searchText) {
      return list;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return list.filter(task =>
         task.title.toLocaleLowerCase().indexOf(searchString) !== -1
    )
  }
}
