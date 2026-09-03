function canBeTypedWords(text: string, brokenLetters: string): number {
  const brokenSet = new Set(brokenLetters);
  const words: string[] = text.split(" ");
  let result: number = 0;

  for (const word of words) {
    let canType: boolean = true;

    for (const char of word) {
      if (brokenSet.has(char)) {
        canType = false;
        break;
      }
    }

    if (canType) {
      result++;
    }
  }

  return result;
}

console.log(canBeTypedWords("hello world", "ad")); //1

console.log(canBeTypedWords("leet code", "lt")); //1

console.log(canBeTypedWords("leet code", "e")); //0
