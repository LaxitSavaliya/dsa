function twoSum(nums: number[], target: number): number[] {
  const seen = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const wantIdx: number | undefined = seen.get(target - nums[i]);
    if (wantIdx !== undefined) {
      return [wantIdx, i];
    }

    seen.set(nums[i], i);
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); //[0, 1]

console.log(twoSum([3, 2, 4], 6)); // [1, 2]

console.log(twoSum([3, 3], 6)); //[0, 1]

console.log(twoSum([3, 2, 3, 4, 3], 7)); //[0, 3]
