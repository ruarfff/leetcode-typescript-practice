import { findMinArrowShots } from '../src/MinimumNumberofArrowstoBurstBalloons';

describe('MinimumNumberofArrowstoBurstBalloons', () => {
  it('Example 1', () => {
    const points = [
      [10, 16],
      [2, 8],
      [1, 6],
      [7, 12]
    ];
    const output = 2;
    // Explanation: One way is to shoot one arrow for example at x = 6 (bursting the balloons [2,8] and [1,6]) and another arrow at x = 11 (bursting the other two balloons).

    expect(findMinArrowShots(points)).toEqual(output);
  });
  it('Example 2', () => {
    const points = [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8]
    ];
    const output = 4;
    expect(findMinArrowShots(points)).toEqual(output);
  });
  it('Example 3', () => {
    const points = [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5]
    ];
    const output = 2;
    expect(findMinArrowShots(points)).toEqual(output);
  });
  it('Example 4', () => {
    const points = [[1, 2]];
    const output = 1;
    expect(findMinArrowShots(points)).toEqual(output);
  });

  it('Example 5', () => {
    const points = [
      [2, 3],
      [2, 3]
    ];
    const output = 1;
    expect(findMinArrowShots(points)).toEqual(output);
  });

  it('Example 6', () => {
    const points = [[-2147483648, 2147483647]];
    const output = 1;

    expect(findMinArrowShots(points)).toEqual(output);
  });

  it('Example 7', () => {
    const points: number[][] = [];
    const output = 0;

    expect(findMinArrowShots(points)).toEqual(output);
  });

  it('Example 8', () => {
    const points = [
      [3, 9],
      [7, 12],
      [3, 8],
      [6, 8],
      [9, 10],
      [2, 9],
      [0, 9],
      [3, 9],
      [0, 6],
      [2, 8]
    ];
    const output = 2;

    expect(findMinArrowShots(points)).toEqual(output);
  });
});
