import { combinationSum } from '../src';

describe('CombinationSum', () => {
  it('Example 1', () => {
    expect(combinationSum([2, 3, 6, 7], 7)).toEqual([[2, 2, 3], [7]]);
  });

  it('Example 2', () => {
    expect(combinationSum([2, 3, 5], 8)).toEqual([
      [2, 2, 2, 2],
      [2, 3, 3],
      [3, 5],
    ]);
  });

  it('Example 3', () => {
    expect(combinationSum([2], 1)).toEqual([]);
  });

  it('Example 4', () => {
    expect(combinationSum([1], 1)).toEqual([[1]]);
  });

  it('Example 5', () => {
    expect(combinationSum([1], 2)).toEqual([[1, 1]]);
  });
});
