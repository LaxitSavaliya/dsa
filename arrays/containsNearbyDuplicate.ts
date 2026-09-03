function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map: Map<number, number> = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const prev: number | undefined = map.get(nums[i]);
    if (prev !== undefined && Math.abs(i - prev) <= k) {
      return true;
    }
    map.set(nums[i], i);
  }

  return false;
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
// expected: true

console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
// expected: true

console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
// expected: false

console.log(containsNearbyDuplicate([1, 2, 1, 3, 2], 2));
// expected: true

console.log(containsNearbyDuplicate([1, 2, 3, 1], 2));
// expected: false

console.log(containsNearbyDuplicate([1, 1], 1));
// expected: true

console.log(containsNearbyDuplicate([1, 1], 0));
// expected: false

console.log(containsNearbyDuplicate([5], 10));
// expected: false

console.log(containsNearbyDuplicate([1, 2, 3, 4, 1], 4));
// expected: true

console.log(containsNearbyDuplicate([1, 2, 3, 4, 1], 3));
// expected: false

console.log(containsNearbyDuplicate([-1, -2, -1], 2));
// expected: true;
