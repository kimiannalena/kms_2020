import {SearchFilterPipeMock} from './search-filter.pipe.mock';

describe('SearchFilter', () => {
  const searchFilter = new SearchFilterPipeMock();

  it('is present', () => {
    expect(searchFilter).toBeTruthy();
  });

  it('transforms Priority.low to "low"', () => {
    expect(searchFilter.transform()).toBe('low');
  });
});
