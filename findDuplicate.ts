function findDuplicate(nums: number[]): number {
  const seen: Set<number> = new Set<number>();

  for (const num of nums) {
    if (seen.has(num)) {
      return num;
    }
    seen.add(num);
  }

  return -1;
}

console.log(findDuplicate([1, 3, 4, 2, 2])); // 2
console.log(findDuplicate([3, 1, 3, 4, 2])); // 3
console.log(findDuplicate([1, 1])); // 1
console.log(findDuplicate([1, 2, 2])); // 2
