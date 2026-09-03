function interchangeSort(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        const temp: number = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;

        // nums[i] = nums[i] + nums[j];
        // nums[j] = nums[i] - nums[j];
        // nums[i] = nums[i] - nums[j];
      }
    }
  }

  return nums;
}

console.log(interchangeSort([5, 2, 3, 1]));
// expected: [1, 2, 3, 5]

console.log(interchangeSort([5, 1, 1, 2, 0, 0]));
// expected: [0, 0, 1, 1, 2, 5]

console.log(interchangeSort([3, 2, 1]));
// expected: [1, 2, 3]

console.log(interchangeSort([1, 2, 3]));
// expected: [1, 2, 3]

console.log(interchangeSort([4]));
// expected: [4]

console.log(interchangeSort([-2, 3, -1, 5, 0]));
// expected: [-2, -1, 0, 3, 5]

console.log(interchangeSort([2, 2, 2, 1, 1]));
// expected: [1, 1, 2, 2, 2]
