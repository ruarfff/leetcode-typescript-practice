export function rob(nums: number[]): number {
  const len = nums.length;
  if (len === 1) {
    return nums[0];
  }
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }

  return Math.max(
    robFrom(nums, 0, nums.length - 2),
    robFrom(nums, 1, nums.length - 1)
  );
}

function robFrom(nums: number[], start: number, end: number) {
  let x = 0,
    y = 0;
  let n = 0;
  for (let i = end; i >= start; i--) {
    n = Math.max(x, nums[i] + y);
    y = x;
    x = n;
  }
  return n;
}
