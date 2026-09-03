function prefixCount(words: string[], pref: string): number {
  let result: number = 0;

  for (const word of words) {
    if (word.startsWith(pref)) {
      result++;
    }
  }

  return result;
}

console.log(prefixCount(["pay", "attention", "practice", "attend"], "at")); //2

console.log(prefixCount(["leetcode", "win", "loops", "success"], "code")); //0
