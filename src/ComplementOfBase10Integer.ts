export function bitwiseComplement(N: number): number {
  const binaryNum = (N >>> 0).toString(2);
  let num = '';
  for (let i = 0; i < binaryNum.length; i++) {
    const c = binaryNum.charAt(i);
    num += c === '0' ? 1 : 0;
  }
  return Number.parseInt(num, 2);
}
