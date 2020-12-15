import {SearchFilterPipeMock} from './search-filter.pipe.mock';
import {Category} from '../../../model/Category';
import {Task} from '../../../model/Task';
import { taskListMock } from '../../../model/mocks/taskMock';
import { testCat0, testCat1, testCat2, testCat3, testCat4, testCat5 } from '../../../model/mocks/categoryMock';

describe('SearchFilter', () => {
  const searchFilter = new SearchFilterPipeMock();

  let mockList: Task[] = taskListMock;
  let mockSearchText = '';
  let mockClickedCategories: Category[] = [];
  let mockSearchFlag = false;
  let mockCatFlag = false;

  it('is present', () => {
    expect(searchFilter).toBeTruthy();
  });

  it('returns same list if both flags are false', () => {
    mockSearchFlag = false;
    mockCatFlag = false;
    expect(searchFilter.transform(mockList, mockSearchText, mockClickedCategories, mockSearchFlag, mockCatFlag))
      .toEqual(mockList);
  });

  it('perfoms search function correctly on searchFlag true', () => {
    mockSearchFlag = true;
    mockSearchText = 'Müll';
    expect(searchFilter.transform(mockList, mockSearchText, mockClickedCategories, mockSearchFlag, mockCatFlag))
      .toEqual([mockList[9]]);
  });

  it('perfoms search function correctly', () => {
      mockSearchFlag = true;
      expect(searchFilter.transform(mockList, mockSearchText, mockClickedCategories, mockSearchFlag, mockCatFlag))
        .not.toEqual([mockList[2], mockList[5]]);
  });

  it('perfoms categorise function correctly on catFlag true', () => {
    mockCatFlag = true;
    mockClickedCategories = [testCat3];
    expect(searchFilter.transform(mockList, mockSearchText, mockClickedCategories, mockSearchFlag, mockCatFlag))
      .toEqual([mockList[0]]);
  });

  it('perfoms categorise function correctly', () => {
      mockCatFlag = true;
      mockClickedCategories = [testCat1];
      expect(searchFilter.transform(mockList, mockSearchText, mockClickedCategories, mockSearchFlag, mockCatFlag))
        .not.toEqual([mockList[4], mockList[5]]);
  });


  // TODO: result is karma.config.js ... whyyyy??
  /*it('is null if category does not match any list entries', () => {
    mockCatFlag = true;
    mockClickedCategories = [testCat0];
    expect(searchFilter.transform(mockList, mockSearchText, mockClickedCategories, mockSearchFlag, mockCatFlag))
      .toEqual([]);
      // .toBeNull();
  });*/

  afterEach( () => {
    mockList = taskListMock;
    mockSearchText = '';
    mockClickedCategories = [];
    mockSearchFlag = false;
    mockCatFlag = false;
  });
});
