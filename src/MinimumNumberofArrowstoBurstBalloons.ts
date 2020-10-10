export function findMinArrowShots(points: number[][]): number {
  if (points.length === 0) {
    return 0;
  }
  const p = points.sort(sort);
  let arrows = 1;
  let currentX = p[0][1];
  for (let i = 0; i < p.length; i++) {
    const min = p[i][0];
    const max = p[i][1];
    if (currentX < min || currentX > max) {
      currentX = max;
      arrows++;
    }
  }
  return arrows;
}

function sort(a: number[], b: number[]): number {
  if (a[1] === b[1]) {
    return 1;
  } else {
    return a[1] < b[1] ? -1 : 1;
  }
}
