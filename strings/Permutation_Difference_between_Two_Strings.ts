function findPermutationDifference(s: string, t: string): number {
  const positions = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    positions.set(s[i], i);
  }

  let result: number = 0;

  for (let i = 0; i < t.length; i++) {
    result += Math.abs(positions.get(t[i])! - i);
  }

  return result;
}

console.log(findPermutationDifference("abc", "bac")); //2

console.log(findPermutationDifference("abcde", "edbac")); //12
