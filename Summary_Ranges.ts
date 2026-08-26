function summaryRanges(nums: number[]): string[] {
  const str: string[] = [];
  let last: number = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + 1 !== nums[i + 1]) {
      if (last === i) {
        str.push(`${nums[last]}`);
      } else {
        str.push(`${nums[last]}->${nums[i]}`);
      }

      last = i + 1;
    }
  }

  return str;
}

console.log(summaryRanges([0, 1, 2, 4, 5, 7])); //["0->2","4->5","7"]

console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9])); //["0","2->4","6","8->9"]
