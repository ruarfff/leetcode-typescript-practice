export function search(nums: number[], target: number): number {
  if (nums.length === 0) {
    return -1;
  }
  if (nums[0] === target) {
    return 0;
  }

  let top = nums.length;
  let bottom = 0;
  let pivot = Math.floor(top / 2);

  while (pivot > bottom && pivot < top) {
    if (nums[pivot] === target) {
      return pivot;
    } else if (nums[pivot] > target) {
      top = pivot;
    } else {
      bottom = pivot;
    }
    pivot = Math.floor((top + bottom) / 2);
  }

  return -1;
}

export function searchR(nums: number[], target: number): number {
  if (nums.length === 0) {
    return -1;
  }

  return binarySearch(nums, target, 0);
}

function binarySearch(
  nums: number[],
  target: number,
  startIndex: number
): number {
  const pivot = Math.floor(nums.length / 2);
  if (nums[pivot] === target) {
    return startIndex + pivot;
  }

  if (nums.length > 1) {
    if (nums[pivot] < target) {
      return binarySearch(
        nums.slice(pivot, nums.length),
        target,
        startIndex + pivot
      );
    } else if (nums[pivot] > target) {
      return binarySearch(nums.slice(0, pivot), target, startIndex);
    }
  }

  return -1;
}
