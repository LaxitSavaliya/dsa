function lengthOfLongestSubstring(s: string): number {
  const map = new Map();

  let left: number = 0;
  let longest: number = 0;

  for (let i = 0; i < s.length; i++) {
    const lastIndex: number | undefined = map.get(s[i]);

    if (lastIndex !== undefined && left <= lastIndex) {
      left = lastIndex + 1;
    }

    longest = Math.max(longest, i - left + 1);

    map.set(s[i], i);
  }

  return longest;
}

console.log(lengthOfLongestSubstring("abba")); //3

console.log(lengthOfLongestSubstring("abacadb")); //3

console.log(lengthOfLongestSubstring("bbbbb")); // 1

console.log(lengthOfLongestSubstring("pwwkew")); // 3
