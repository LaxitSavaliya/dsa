function twoSum(nums: number[], target: number): number[] {
  const seen: Map<number, number> = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const needed: number = target - nums[i];
    const previousIndex: number | undefined = seen.get(needed);

    if (previousIndex !== undefined) {
      return [previousIndex, i];
    }

    seen.set(nums[i], i);
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]
console.log(twoSum([1, 5, 8, 3], 11)); // [2, 3]
