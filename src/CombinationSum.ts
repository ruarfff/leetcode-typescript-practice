export function combinationSum(
  candidates: number[],
  target: number
): number[][] {
  const output: number[][] = [];
  const c = candidates.sort()
  console.log('Adding currentCombo: ' + JSON.stringify(c))
  getCombos(output, c, target, 0, []);
  return output;
}

function getCombos(output: number[][], candidates: number[],target: number, index: number, currentCombo: number[]) {
    console.log('target: ' + target)
    console.log('currentCombo: ' + JSON.stringify(currentCombo))
    if(target === 0) {
        console.log('Adding currentCombo: ' + JSON.stringify(currentCombo))
        output.push([...currentCombo]);
        return;
    }

    console.log('index: ' + index)
    console.log('len: ' + candidates.length)
    for(let i = index; i < candidates.length; i++) {
        const current = candidates[i];
        if(current > target) {
            break;
        }
        currentCombo.push(current)
        getCombos(output, candidates, target - current, i, currentCombo);
        currentCombo.pop()
    }


}
