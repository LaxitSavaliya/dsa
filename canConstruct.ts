function canConstruct(ransomNote: string, magazine: string): boolean {
  const count: Map<string, number> = new Map<string, number>();

  for (const char of magazine) {
    count.set(char, (count.get(char) || 0) + 1);
  }

  for (const char of ransomNote) {
    const available: number | undefined = count.get(char) ?? 0;

    if (!available) {
      return false;
    }

    count.set(char, available - 1);
  }

  return true;
}

console.log(canConstruct("a", "b")); // false
console.log(canConstruct("aa", "ab")); // false
console.log(canConstruct("aa", "aab")); // true
console.log(canConstruct("abc", "cbad")); // true
console.log(canConstruct("aaa", "aab")); // false
