export function buddyStrings(A: string, B: string): boolean {
  const size = A.length;
  if (size !== B.length || size < 2 || B.length < 2) {
    return false;
  }

  if (A === B) {
    let counts = new Map();
    for (let i = 0; i < A.length; i++) {
      const c = A.charAt(i);
      if (counts.has(c)) {
        counts.set(c, counts.get(c) + 1);
      } else {
        counts.set(c, 1);
      }

      if (counts.get(c) > 1) {
        return true;
      }
    }

    return false;
  }

  const aDiffs = [];
  const bDiffs = [];
  for (let i = 0; i < size; i++) {
    if (A.charAt(i) !== B.charAt(i)) {
      aDiffs.push(A.charAt(i));
      bDiffs.push(B.charAt(i));
      if (aDiffs.length > 2) {
        return false;
      }
    }
  }
  if (aDiffs.length === 1) {
    return false;
  }

  if (aDiffs.length === 0) {
    return true;
  }

  return aDiffs[0] === bDiffs[1] && aDiffs[1] === bDiffs[0];
}
