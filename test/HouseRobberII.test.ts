import { rob } from '../src/HouseRobberII';

describe('HouseRobberII', () => {
  it('Example 1', () => {
    const nums = [2, 3, 2];
    const output = 3;
    //Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
    expect(rob(nums)).toEqual(output);
  });
  it('Example 2', () => {
    const nums = [1, 2, 3, 1];
    const output = 4;

    expect(rob(nums)).toEqual(output);
  });
  it('Example 3', () => {
    const nums = [0];
    const output = 0;

    expect(rob(nums)).toEqual(output);
  });

  it('Example 4', () => {
    const nums = [1, 2, 1, 1];
    const output = 3;

    expect(rob(nums)).toEqual(output);
  });
});
