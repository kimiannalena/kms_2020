import { Pipe, PipeTransform } from '@angular/core';
import { PriorityMock } from '../../model/Priority.mock';

@Pipe({
  name: 'priority'
})
export class PriorityPipeMock implements PipeTransform {
  transform(value: PriorityMock): string {
    switch (value) {
      case PriorityMock.low:
        return 'low';
      case PriorityMock.medium:
        return 'medium';
      case PriorityMock.high:
        return 'high';
      default:
        return value;
    }
  }
}
