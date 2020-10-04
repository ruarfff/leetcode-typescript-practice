import { findPairs } from '../src/KDiffPairsArray';

describe('KDiffPairsArray', () => {
  it('Example 1', () => {
    expect(findPairs([3, 1, 4, 1, 5], 2)).toEqual(2);
  });

  it('Example 2', () => {
    expect(findPairs([1, 2, 3, 4, 5], 1)).toEqual(4);
  });

  it('Example 3', () => {
    expect(findPairs([1, 3, 1, 5, 4], 0)).toEqual(1);
  });

  it('Example 4', () => {
    expect(findPairs([1, 2, 4, 4, 3, 3, 0, 9, 2, 3], 3)).toEqual(2);
  });

  it('Example 5', () => {
    expect(findPairs([-1, -2, -3], 1)).toEqual(2);
  });
});
