function intersect(nums1: number[], nums2: number[]): number[] {
  if (nums1.length > nums2.length) {
    return intersect(nums2, nums1);
  }

  const map: Map<number, number> = new Map<number, number>();
  const result: number[] = [];

  for (const num of nums1) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const num of nums2) {
    const seen: number | undefined = map.get(num);
    if (seen) {
      result.push(num);
      map.set(num, seen - 1);
    }
  }

  return result;
}

console.log(intersect([1, 2, 2, 1], [2, 2]));
// expected: [2, 2]

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
// expected: [4, 9]
// [9, 4] is also valid

console.log(intersect([1, 2, 3], [4, 5, 6]));
// expected: []

console.log(intersect([1], [1]));
// expected: [1]

console.log(intersect([1, 1, 1], [1, 1]));
// expected: [1, 1]

console.log(intersect([2, 2, 2, 3], [2, 2, 4]));
// expected: [2, 2]

console.log(intersect([0, 0, 1, 2], [0, 0, 0, 2]));
// expected: [0, 0, 2]

console.log(intersect([1, 2, 2, 3, 3, 3], [2, 2, 2, 3, 3]));
// expected: [2, 2, 3, 3]

console.log(intersect([5, 5, 5], [5]));
// expected: [5]

console.log(intersect([1, 2, 3, 4], [4, 3, 2, 1]));
// expected: [1, 2, 3, 4]
// any order is valid

console.log(intersect([1, 1, 2, 2], [1, 2, 2, 2]));
// expected: [1, 2, 2]
