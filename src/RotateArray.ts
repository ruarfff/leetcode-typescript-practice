/**
 Do not return anything, modify nums in-place instead.
 */
export function rotate(nums: number[], k: number): void {
  const len = nums.length;
  if (len < 2) {
    return;
  }
  if (k > len) {
    k = k % len;
  }

  for (let i = 0; i < k; i++) {
    const x: number = nums.pop() || 0;
    nums.unshift(x);
  }
}
