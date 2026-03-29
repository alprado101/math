export function gcdBruteForce(a: number, b: number): number {
  const start = Math.min(a, b);

  for (let i = start; i >= 1; i--) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
  return 1;
}
