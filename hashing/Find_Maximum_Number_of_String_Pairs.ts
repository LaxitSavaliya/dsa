function maximumNumberOfStringPairs(words: string[]): number {
  const expected = new Set<string>();
  let result: number = 0;

  for (const word of words) {
    if (expected.has(word)) {
      expected.delete(word);
      result++;
    } else {
      expected.add(word[1] + word[0]);
    }
  }

  return result;
}

console.log(maximumNumberOfStringPairs(["cd", "ac", "dc", "ca", "zz"])); //2

console.log(maximumNumberOfStringPairs(["ab", "ba", "cc"])); //1

console.log(maximumNumberOfStringPairs(["aa", "ab"])); //0
