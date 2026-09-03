function reversePrefix(word: string, ch: string): string {
  const characters: string[] = [...word];
  const end: number = characters.indexOf(ch);

  if (end === -1) {
    return word;
  }

  let left: number = 0;
  let right: number = end;

  while (left < right) {
    [characters[left], characters[right]] = [
      characters[right],
      characters[left],
    ];

    left++;
    right--;
  }

  return characters.join("");
}

console.log(reversePrefix("abcdefd", "d")); //"dcbaefd"

console.log(reversePrefix("xyxzxe", "z")); //"zxyxxe"

console.log(reversePrefix("abcd", "z")); //"abcd"
