function sortSentence(s: string): string {
  const words: string[] = s.split(" ");
  const result: string[] = new Array<string>(words.length);

  for (const word of words) {
    const position: number = Number(word[word.length - 1]) - 1;
    result[position] = word.slice(0, -1);
  }

  return result.join(" ");
}

console.log(sortSentence("is2 sentence4 This1 a3")); //"This is a sentence"

console.log(sortSentence("Myself2 Me1 I4 and3")); //"Me Myself and I"
