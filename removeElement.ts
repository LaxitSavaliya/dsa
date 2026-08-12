function removeElement(nums: number[], val: number): number {
  let k: number = 0;

  // for (let i = 0; i < nums.length - 1; i++) {
  //   if (nums[i] === val) {
  //     if (nums[i] !== nums[i + 1]) {
  //       let temp: number = nums[k];
  //       nums[k] = nums[i + 1];
  //       nums[i + 1] = temp;
  //       k++;
  //     }
  //     continue;
  //   }
  //   k++;
  // }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}

console.log(removeElement([2], 3)); //1

console.log(removeElement([3, 3, 3, 2], 3)); //1

console.log(removeElement([3, 2, 2, 3], 3)); //2

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); //5

console.log(removeElement([1, 2, 1, 2, 1, 3, 3], 2)); // 5
