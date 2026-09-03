function mergeAlternately(word1: string, word2: string): string {
  const length: number = Math.max(word1.length, word2.length);
  let result: string = "";

  for (let i = 0; i < length; i++) {
    result += word1[i] ?? "";
    result += word2[i] ?? "";
  }

  return result;
}

console.log(mergeAlternately("abc", "pqr")); //"apbqcr"

console.log(mergeAlternately("ab", "pqrs")); //"apbqrs"

console.log(mergeAlternately("abcd", "pq")); //"apbqcd"
