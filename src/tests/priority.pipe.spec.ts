import {PriorityPipe} from '../app/pipes/priority.pipe';
import {Priority} from '../app/model/Priority';

describe('PriorityPipe', () => {
  const pipe = new PriorityPipe();

  it('transforms Priority.prio to "prio"', () => {
    expect(pipe.transform(Priority.low)).toBe('low');
  });
});
