function majorityElement(nums: number[]): number {
  const count: Map<number, number> = new Map<number, number>();

  for (const num of nums) {
    const currentCount: number = (count.get(num) || 0) + 1;

    count.set(num, currentCount);

    if (currentCount > nums.length / 2) {
      return num;
    }
  }

  return -1;
}

console.log(majorityElement([3, 2, 3])); // 3

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2

console.log(majorityElement([5])); // 5
