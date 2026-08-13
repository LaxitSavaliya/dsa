function nextPermutation(nums: number[]): void {
  let change = -1;
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i - 1] < nums[i]) {
      change = i - 1;
      break;
    }
  }

  let left = change + 1;
  let right = nums.length - 1;

  while (left < right) {
    const temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
    left++;
    right--;
  }

  console.log(nums);
}

// console.log(nextPermutation([1, 2, 3])); // [1,3,2]

// console.log(nextPermutation([3, 2, 1])); // [1,2,3]

// console.log(nextPermutation([1, 1, 5])); // [1,5,1]

nextPermutation([2, 4, 5, 3, 1]); // [2 ,5, 1, 3, 4]

// [2, 4, 1, 3, 5]

// [1,4,7,2] 3

// [4, 5, 3, 2, 1]
