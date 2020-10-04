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

  fit('Wrong on submission', () => {
    expect(combinationSum([3,12,9,11,6,7,8,5,4], 15)).toEqual([[3,3,3,3,3],[3,3,3,6],[3,3,4,5],[3,3,9],[3,4,4,4],[3,4,8],[3,5,7],[3,6,6],[3,12],[4,4,7],[4,5,6],[4,11],[5,5,5],[6,9],[7,8]]);
  })
});
