import { Pipe, PipeTransform } from '@angular/core';
import { Priority } from '../../model/Priority';

@Pipe({
  name: 'priority'
})
export class PriorityPipe implements PipeTransform {
  transform(value: Priority): string {
    switch (value) {
      case Priority.low:
        return 'low';
      case Priority.medium:
        return 'medium';
      case Priority.high:
        return 'high';
      default:
        return value;
    }
  }
}
