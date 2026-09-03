function moveZeroes(nums: number[]): number[] {
  let pos: number = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      if (pos === -1) {
        pos = i;
      }
      continue;
    }

    if (pos > -1) {
      const temp = nums[pos];
      nums[pos] = nums[i];
      nums[i] = temp;

      pos++;
    }
  }
  return nums;
}

// function moveZeroes(nums: number[]): void {
//   let pos: number = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       const temp = nums[pos];
//       nums[pos] = nums[i];
//       nums[i] = temp;
//       pos++;
//     }
//   }
// }

console.log(moveZeroes([0, 1, 1, 2, 3, 12]));
// expected: [1, 3, 12, 0, 0]

console.log(moveZeroes([0]));
// expected: [0]

// -1   0   1
// [1,2,0,0,0,3]
console.log(moveZeroes([1, 0, 2, 0, 0, 3]));
// expected: [1, 2, 3, 0, 0, 0]

console.log(moveZeroes([1, 2, 3]));
// expected: [1, 2, 3]

console.log(moveZeroes([0, 0, 1]));
// expected: [1, 0, 0]

console.log(moveZeroes([0, 0, 0]));
// expected: [0, 0, 0]

console.log(moveZeroes([1, 0]));
// expected: [1, 0]

console.log(moveZeroes([0, 1]));
// expected: [1, 0]

console.log(moveZeroes([4, 0, 0, 0, 5, 0, 7, 0, 0, 6, 0, 7]));
// expected: [4, 5, 6, 7, 0, 0, 0]

console.log(moveZeroes([-1, 0, -2, 3, 0]));
// expected: [-1, -2, 3, 0, 0]
