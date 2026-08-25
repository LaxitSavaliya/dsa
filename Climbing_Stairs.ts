function climbStairs(n: number): number {
  let a: number = 0;
  let b: number = 1;

  for (let i = 1; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }

  return b;
}

console.log(climbStairs(2)); // 2

console.log(climbStairs(3)); // 3

console.log(climbStairs(4)); // 5

console.log(climbStairs(5)); // 8

console.log(climbStairs(45)); // 1836311903
