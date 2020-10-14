export function rob(nums: number[]): number {
  const len = nums.length;
  if (len === 1) {
    return nums[0];
  }
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }
  let sums: number[] = [nums[0], Math.max(nums[0], nums[1])];

  for (let i = 2; i < len; i++) {
    sums.push(Math.max(nums[i] + sums[i - 2], sums[i - 1]));
  }

  return sums[len - 1];
}
