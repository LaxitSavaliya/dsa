function countConsistentStrings(allowed: string, words: string[]): number {
  const allowedChars = new Set<string>(allowed);

  let count: number = 0;

  for (const word of words) {
    for (const char of word) {
      if (!allowedChars.has(char)) {
        count--;
        break;
      }
    }

    count++;
  }

  return count;
}

console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"])); //2

console.log(
  countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"]),
); //7

console.log(
  countConsistentStrings("cad", [
    "cc",
    "acd",
    "b",
    "ba",
    "bac",
    "bad",
    "ac",
    "d",
  ]),
); //4
