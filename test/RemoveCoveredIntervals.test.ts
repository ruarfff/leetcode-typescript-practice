import { removeCoveredIntervals } from '../src/RemoveCoveredIntervals';

describe('RemoveCoveredIntervals', () => {
  it('Example 1', () => {
    expect(
      removeCoveredIntervals([
        [1, 4],
        [3, 6],
        [2, 8]
      ])
    ).toEqual(2);
  });

  it('Example 2', () => {
    expect(
      removeCoveredIntervals([
        [1, 4],
        [2, 3]
      ])
    ).toEqual(1);
  });

  it('Example 3', () => {
    expect(
      removeCoveredIntervals([
        [0, 10],
        [5, 12]
      ])
    ).toEqual(2);
  });

  it('Example 4', () => {
    expect(
      removeCoveredIntervals([
        [3, 10],
        [4, 10],
        [5, 11]
      ])
    ).toEqual(2);
  });

  it('Example 5', () => {
    expect(
      removeCoveredIntervals([
        [1, 2],
        [1, 4],
        [3, 4]
      ])
    ).toEqual(1);
  });

  it('Wrong answer', () => {
    expect(
      removeCoveredIntervals([
        [66672, 75156],
        [59890, 65654],
        [92950, 95965],
        [9103, 31953],
        [54869, 69855],
        [33272, 92693],
        [52631, 65356],
        [43332, 89722],
        [4218, 57729],
        [20993, 92876]
      ])
    ).toEqual(3);
  });
});
