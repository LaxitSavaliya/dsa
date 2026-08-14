function bubbleSort(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        const temp: number = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }

  return nums;
}

console.log(bubbleSort([9, 8, 7, 6, 5, 2, 3, 1]));
// expected: [1, 2, 3, 5, 6, 7, 8, 9]

console.log(bubbleSort([5, 1, 1, 2, 0, 0]));
// expected: [0, 0, 1, 1, 2, 5]

console.log(bubbleSort([3, 2, 1]));
// expected: [1, 2, 3]

console.log(bubbleSort([1, 2, 3]));
// expected: [1, 2, 3]

console.log(bubbleSort([4]));
// expected: [4]

console.log(bubbleSort([-2, 3, -1, 5, 0]));
// expected: [-2, -1, 0, 3, 5]

console.log(bubbleSort([2, 2, 2, 1, 1]));
// expected: [1, 1, 2, 2, 2]
