function missingNumber(nums: number[]): number {
  const seen = new Set<number>(nums);

  for (let i = 0; i < nums.length; i++) {
    if (!seen.has(i)) {
      return i;
    }
  }

  return nums.length;
}

// function missingNumber(nums: number[]): number {
//   const n = nums.length;
//   const expectedSum = (n * (n + 1)) / 2;

//   let actualSum = 0;

//   for (const num of nums) {
//     actualSum += num;
//   }

//   return expectedSum - actualSum;
// }

console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 1])); // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
console.log(missingNumber([0])); // 1
