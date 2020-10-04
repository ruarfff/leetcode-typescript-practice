export function combinationSum(
  candidates: number[],
  target: number
): number[][] {
  const output: number[][] = [];
  candidates.sort(function(a, b) {
    return a - b;
  });
  getCombos(output, candidates, target, 0, []);
  return output;
}

function getCombos(
  output: number[][],
  candidates: number[],
  target: number,
  index: number,
  currentCombo: number[]
) {
  if (target === 0) {
    output.push([...currentCombo]);
    return;
  }

  for (let i = index; i < candidates.length; i++) {
    const current = candidates[i];
    if (current > target) {
      break;
    }
    currentCombo.push(current);
    getCombos(output, candidates, target - current, i, currentCombo);
    currentCombo.pop();
  }
}
