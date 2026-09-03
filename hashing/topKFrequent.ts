function topKFrequent(nums: number[], k: number): number[] {
  const count: Map<number, number> = new Map<number, number>();

  for (const num of nums) {
    count.set(num, (count.get(num) || 0) + 1);
  }

  const sorted: number[][] = [...count.entries()].sort((a, b) => b[1] - a[1]);

  return sorted.slice(0, k).map(([num]) => num);
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
// [1, 2]

console.log(topKFrequent([1], 1));
// [1]

console.log(topKFrequent([4, 4, 4, 6, 6, 8, 8, 8, 8], 2));
// [8, 4]

console.log(topKFrequent([1, 2, 1, 2, 1, 3, 3], 2));
// [1, 2] or [1, 3] depending on tie handling
