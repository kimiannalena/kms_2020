import { PriorityPipeMock } from './priority.pipe.mock';
import { PriorityMock } from '../../model/Priority.mock';
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
  it('is present', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms Priority.low to "low"', () => {
    expect(pipe.transform(PriorityMock.low)).toBe('low');
  });

  it('does not transform Priority.low to "high"', () => {
    expect(pipe.transform(PriorityMock.low)).not.toBe('high');
  });
});

