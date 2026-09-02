function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
  return word1.join("") === word2.join("");
}

console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"])); //true

console.log(arrayStringsAreEqual(["a", "cb"], ["ab", "c"])); //false

console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"])); //true
