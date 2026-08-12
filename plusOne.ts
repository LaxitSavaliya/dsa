function plusOne(digits: number[]): number[] {
  let k: number = digits.length - 1;

  while (k !== -1) {
    if (digits[k] !== 9) {
      digits[k]++;
      k = -1;
      break;
    }

    digits[k] = 0;
    if (k === 0) {
      digits.unshift(1);
    }
    k--;
  }

  return digits;
}

console.log(plusOne([1, 2, 3]));
// expected: [1, 2, 4]

console.log(plusOne([4, 3, 2, 1]));
// expected: [4, 3, 2, 2]

console.log(plusOne([9]));
// expected: [1, 0]

console.log(plusOne([1, 2, 9]));
// expected: [1, 3, 0]

console.log(plusOne([1, 9, 9]));
// expected: [2, 0, 0]

console.log(plusOne([9, 9]));
// expected: [1, 0, 0]

console.log(plusOne([9, 9, 9]));
// expected: [1, 0, 0, 0]

console.log(plusOne([5, 0, 0]));
// expected: [5, 0, 1]

console.log(plusOne([8, 9, 9, 9]));
// expected: [9, 0, 0, 0]

console.log(plusOne([2]));
// expected: [3]
