export function search(nums: number[], target: number): number {
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
  console.log(nums);
  console.log('Index: ' + startIndex);
  console.log('Pivot: ' + pivot);
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
