function threeSum(nums: number[]): number[][] {
  const map = new Map<number, number[][]>();
  const arr: number[][] = [];

  for (let i = 1; i < nums.length; i++) {
    const want = 0 - nums[i];
    const seen = map.get(want);

    if (seen !== undefined) {
      for (let j = 0; j < seen.length; j++) {
        arr.push([nums[seen[j][0]], nums[seen[j][1]], nums[i]]);
      }
      map.delete(want);
    }

    for (let j = 0; j < i; j++) {
      const key = nums[j] + nums[i];

      const pairs = map.get(key) ?? [];
      pairs.push([j, i]);
      map.set(key, pairs);
    }
  }

  return arr;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4])); //[[-1,-1,2],[-1,0,1]]

console.log(threeSum([0, 1, 1])); //[]

console.log(threeSum([0, 0, 0, 0])); //[[0,0,0]]
