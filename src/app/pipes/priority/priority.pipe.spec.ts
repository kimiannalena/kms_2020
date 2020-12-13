import { PriorityPipeMock } from './priority.pipe.mock';
import { Priority } from '../../model/Priority';
import {PriorityPipe} from './priority.pipe';

describe('PriorityPipe', () => {
  const pipe = new PriorityPipeMock();

  it('is present', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms Priority.low to "low"', () => {
    expect(pipe.transform(Priority.low)).toEqual('low');
  });

  it('does not transform Priority.low to "high"', () => {
    expect(pipe.transform(Priority.low)).not.toEqual('high');
  });
});

