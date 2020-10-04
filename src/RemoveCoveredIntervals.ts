export function removeCoveredIntervals(intervals: number[][]): number {
  function sortFunction(a: number[], b: number[]) {
    if (a[0] === b[0]) {
      return 0;
    } else {
      return a[0] < b[0] ? -1 : 1;
    }
  }
  intervals.sort(sortFunction);
  let current = [-1, -1];
  let covered = 0;

  for (let i = 0; i < intervals.length; i++) {
    const next = intervals[i];

    if (next[0] > current[0] && next[1] > current[1]) {
      current[0] = next[0];
      covered++;
    }
    current[1] = Math.max(current[1], next[1]);
  }

  return covered;
}
