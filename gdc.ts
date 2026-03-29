export function gcdBruteForce(a: number, b: number): number {
  const start = Math.min(a, b);

  for (let i = start; i >= 1; i--) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
  return 1;
}

export function gcdEuclid(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);

  if (x === 0) return y;
  if (y === 0) return x;

  while (x !== y) {
    if (x > y) {
      x = x - y;
    } else {
      y = y - x;
    }
  }
  return x;
}
