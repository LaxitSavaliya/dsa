function longestConsecutive(nums: number[]): number {
  const set: Set<number> = new Set<number>(nums);
  let longest: number = 0;

  for (const num of set) {
    if (!set.has(num - 1)) {
      let current: number = num;
      let length: number = 1;

      while (set.has(current + 1)) {
        current++;
        length++;
      }

      longest = Math.max(longest, length);
    }
  }

  return longest;
}

console.log(
  longestConsecutive([100, 101, 102, 103, 104, 105, 4, 200, 1, 3, 2, 5]),
);
// 4

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
// 9

console.log(longestConsecutive([10, 20, 30]));
// 1

console.log(longestConsecutive([]));
// 0
