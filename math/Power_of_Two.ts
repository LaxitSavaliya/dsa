// function isPowerOfTwo(n: number): boolean {
//   if (n === 1) return true;

//   if (n <= 0 || n % 2 !== 0) return false;

//   return isPowerOfTwo(n / 2);
// }

function isPowerOfTwo(n: number): boolean {
  if (n <= 0) return false;

  while (n !== 1) {
    if (n % 2 !== 0) return false;

    n = n / 2;
  }

  return true;
}

console.log(isPowerOfTwo(1)); //true

console.log(isPowerOfTwo(16)); //true

console.log(isPowerOfTwo(3)); //false
