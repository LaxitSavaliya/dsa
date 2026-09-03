function searchInsert(nums: number[], target: number): number {
  // let k: number = 0;

  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] === target || nums[i] > target) {
  //     break;
  //   }
  //   k++;
  // }

  // return k;

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}
console.log(searchInsert([1, 3, 5, 6], 5)); //2

console.log(searchInsert([1, 3, 5, 6], 2)); //1

console.log(searchInsert([1, 3, 5, 6], 7)); //4

console.log(searchInsert([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)); //9

console.log(searchInsert([5], 2)); //0

console.log(searchInsert([1, 2, 6, 7, 9], 5)); // 2
