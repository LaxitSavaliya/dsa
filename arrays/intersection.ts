function intersection(nums1: number[], nums2: number[]): number[] {
  const nums1Set: Set<number> = new Set<number>(nums1);
  const result: Set<number> = new Set<number>();

  for (const num of nums2) {
    if (nums1Set.has(num)) {
      result.add(num);
    }
  }

  return [...result];
}

console.log(intersection([1, 2, 2, 1], [2, 2])); // [2]

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // [4, 9] or [9, 4]

console.log(intersection([1, 2, 3], [4, 5, 6])); // []

console.log(intersection([1, 1, 1], [1, 1])); // [1]
