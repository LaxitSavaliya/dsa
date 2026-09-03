function firstMatchingIndex(s: string): number {
  for (let i = 0; i < Math.floor((s.length + 1) / 2); i++) {
    if (s[i] === s[s.length - i - 1]) {
      return i;
    }
  }

  return -1;
}

console.log(firstMatchingIndex("abcacbd")); //1

console.log(firstMatchingIndex("abc")); //1

console.log(firstMatchingIndex("abcdab")); //-1
