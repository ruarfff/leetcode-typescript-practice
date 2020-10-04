export function combinationSum(
  candidates: number[],
  target: number
): number[][] {
  let output: number[][] = [];
  candidates.forEach(c => {
    if (c === target) {
      output.push([c]);
    }
  });
  return output;
}
