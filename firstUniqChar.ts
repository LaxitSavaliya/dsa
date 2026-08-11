function firstUniqChar(s: string): number {
  const count = new Map<string, number>();

  for (const char of s) {
    count.set(char, (count.get(char) ?? 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (count.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
}

console.log(firstUniqChar("leetcode")); // 0
console.log(firstUniqChar("loveleetcode")); // 2
console.log(firstUniqChar("aabb")); // -1
console.log(firstUniqChar("abcabcx")); // 6
