function isAnagram(s: string, t: string): boolean {
  const count: Map<string, number> = new Map<string, number>();

  if (s.length !== t.length) {
    return false;
  }

  for (const char of s) {
    count.set(char, (count.get(char) || 0) + 1);
  }

  for (const char of t) {
    const current: number | undefined = count.get(char);

    if (!current) {
      return false;
    }

    if (current === 1) {
      count.delete(char);
    } else {
      count.set(char, current - 1);
    }
  }

  return count.size === 0;
}

console.log(isAnagram("anagram", "nagaram")); //true
console.log(isAnagram("rat", "car")); //false
console.log(isAnagram("aacc", "ccac")); //false
console.log(isAnagram("listen", "silent")); //true
