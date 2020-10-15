import { rotate } from '../src/RotateArray';

describe('RotateArray', () => {
  it('Example 1', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7],
      k = 3;
    const output = [5, 6, 7, 1, 2, 3, 4];
    // Explanation:
    // rotate 1 steps to the right: [7,1,2,3,4,5,6]
    // rotate 2 steps to the right: [6,7,1,2,3,4,5]
    // rotate 3 steps to the right: [5,6,7,1,2,3,4]

    rotate(nums, k);

    expect(nums).toEqual(output);
  });

  it('Example 2', () => {
    const nums = [-1, -100, 3, 99],
      k = 2;
    const output = [3, 99, -1, -100];
    // Explanation:
    // rotate 1 steps to the right: [99,-1,-100,3]
    // rotate 2 steps to the right: [3,99,-1,-100]

    rotate(nums, k);

    expect(nums).toEqual(output);
  });

  it('Example 3', () => {
    const nums = [1, 2],
      k = 3;
    const output = [2, 1];

    rotate(nums, k);

    expect(nums).toEqual(output);
  });
});
