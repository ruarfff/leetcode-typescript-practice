export function findPairs(nums: number[], k: number): number {
  const numMap = initNumMap(nums);
  let numPairs = 0;

  numMap.forEach((value, key) => {
    if (k === 0 && value > 1) {
      numPairs++;
    } else if(k !== 0) {
      if (numMap.has(k + key)) {
        numPairs++;
      }
    }
  });

  return numPairs;
}

function initNumMap(nums: number[]) {
  const numMap = new Map();

  nums.forEach(n => {
    if (numMap.has(n)) {
      numMap.set(n, numMap.get(n) + 1);
    } else {
      numMap.set(n, 1);
    }
  });
  return numMap;
}
