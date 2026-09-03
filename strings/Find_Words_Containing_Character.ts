function findWordsContaining(words: string[], x: string): number[] {
  const result: number[] = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) result.push(i);
  }

  return result;
}

console.log(findWordsContaining(["leet", "code"], "e")); //[0, 1]

console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a")); //[0, 2]

console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "z")); //[]
