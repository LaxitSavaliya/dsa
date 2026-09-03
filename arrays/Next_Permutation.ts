function nextPermutation(nums: number[]): void {
  // function swapValue(val1: number, val2: number) {
  //   nums[val1] = nums[val1] + nums[val2];
  //   nums[val2] = nums[val1] - nums[val2];
  //   nums[val1] = nums[val1] - nums[val2];
  // }

  let change: number = -1;
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i - 1] < nums[i]) {
      change = i - 1;
      break;
    }
  }

  if (change === -1) {
    nums.reverse();
    return;
  }

  let left: number = change + 1;
  let right: number = nums.length - 1;

  while (left < right) {
    // swapValue(left, right);
    const temp: number = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
    left++;
    right--;
  }

  for (let i = change + 1; i < nums.length; i++) {
    if (nums[i] > nums[change]) {
      // swapValue(i, change);
      const temp: number = nums[i];
      nums[i] = nums[change];
      nums[change] = temp;

      break;
    }
  }

  console.log(nums);
}

nextPermutation([2, 1, 2, 2, 2, 2, 2, 1]); // [2,2,1,1,2,2,2,2]

nextPermutation([1, 2, 3]); // [1,3,2]

nextPermutation([3, 2, 1]); // [1,2,3]

nextPermutation([1, 1, 5]); // [1,5,1]

nextPermutation([2, 4, 5, 3, 1]); // [2 ,5, 1, 3, 4]

nextPermutation([5, 4, 3, 2, 1]); // [1, 2, 3, 4, 5]

// function nextPermutation(nums: number[]): void {
//   let change = -1;

//   // Find pivot
//   for (let i = nums.length - 1; i > 0; i--) {
//     if (nums[i - 1] < nums[i]) {
//       change = i - 1;
//       break;
//     }
//   }

//   // No next permutation
//   if (change === -1) {
//     nums.reverse();
//     return;
//   }

//   // Reverse suffix
//   let left = change + 1;
//   let right = nums.length - 1;

//   while (left < right) {
//     const temp = nums[left];
//     nums[left] = nums[right];
//     nums[right] = temp;

//     left++;
//     right--;
//   }

//   // Find first number greater than pivot
//   for (let i = change + 1; i < nums.length; i++) {
//     if (nums[i] > nums[change]) {
//       const temp = nums[i];
//       nums[i] = nums[change];
//       nums[change] = temp;
//       break;
//     }
//   }

//   console.log(nums);
// }

// nextPermutation([2, 1, 2, 2, 2, 2, 2, 1]); // [2,2,1,1,2,2,2,2]

// // nextPermutation([1, 2, 3]); // [1,3,2]

// // nextPermutation([3, 2, 1]); // [1,2,3]

// // nextPermutation([1, 1, 5]); // [1,5,1]

// // nextPermutation([2, 4, 5, 3, 1]); // [2 ,5, 1, 3, 4]

// // nextPermutation([5, 4, 3, 2, 1]); // [1, 2, 3, 4, 5]
