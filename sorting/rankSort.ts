function rankSort(nums: number[]): number[] {
  const result = new Array<number>(nums.length);

  for (let i = 0; i < nums.length; i++) {
    let smaller = 0;
    let equalBefore = 0;

    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        smaller++;
      }

      if (j < i && nums[j] === nums[i]) {
        equalBefore++;
      }
    }

    result[smaller + equalBefore] = nums[i];
  }

  return result;
}
console.log(rankSort([5, 2, 5, 3, 5, 1]));
// expected: [1, 2, 3, 5]

console.log(rankSort([5, 1, 1, 2, 0, 0]));
// expected: [0, 0, 1, 1, 2, 5]

console.log(rankSort([3, 2, 1]));
// expected: [1, 2, 3]

console.log(rankSort([1, 2, 3]));
// expected: [1, 2, 3]

console.log(rankSort([4]));
// expected: [4]

console.log(rankSort([-2, 3, -1, 5, 0]));
// expected: [-2, -1, 0, 3, 5]

console.log(rankSort([2, 2, 2, 1, 1]));
expected: [1, 1, 2, 2, 2];
