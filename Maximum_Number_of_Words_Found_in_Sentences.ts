function mostWordsFound(sentences: string[]): number {
  let maxWordCount: number = 0;

  for (const sentence of sentences) {
    maxWordCount = Math.max(maxWordCount, sentence.split(" ").length);
  }

  return maxWordCount;
}

console.log(
  mostWordsFound([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ]),
); //6

console.log(
  mostWordsFound(["please wait", "continue to fight", "continue to win"]),
); //3
