function selectionSort(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    let smallest: number = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[smallest] > nums[j]) {
        smallest = j;
      }
    }

    const tempt: number = nums[i];
    nums[i] = nums[smallest];
    nums[smallest] = tempt;
  }

  return nums;
}

console.log(selectionSort([5, 2, 3, 1]));
// expected: [1, 2, 3, 5]

console.log(selectionSort([5, 1, 1, 2, 0, 0]));
// expected: [0, 0, 1, 1, 2, 5]

console.log(selectionSort([3, 2, 1]));
// expected: [1, 2, 3]

console.log(selectionSort([1, 2, 3]));
// expected: [1, 2, 3]

console.log(selectionSort([4]));
// expected: [4]

console.log(selectionSort([-2, 3, -1, 5, 0]));
// expected: [-2, -1, 0, 3, 5]

console.log(selectionSort([2, 2, 2, 1, 1]));
// expected: [1, 1, 2, 2, 2]
