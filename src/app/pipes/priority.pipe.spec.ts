import { PriorityPipeMock } from '../components/mockdata/priority.pipe.mock';
import { PriorityMock } from '../components/mockdata/Priority.mock';
import {TestBed} from '@angular/core/testing';
import {PriorityPipe} from './priority.pipe';

describe('PriorityPipe', () => {
  const pipe = new PriorityPipeMock();

  TestBed.configureTestingModule({
    declarations: [
      PriorityMock
    ],
    providers : [
      { provide: PriorityPipe,
        useClass: PriorityPipeMock
      }
    ]
  });

  it('transforms Priority.prio to "prio"', () => {
    expect(pipe.transform(PriorityMock.low)).toBe('low');
  });
});
