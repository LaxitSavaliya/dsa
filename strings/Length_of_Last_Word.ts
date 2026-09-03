function lengthOfLastWord(s: string): number {
  let length: number = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      length++;
      continue;
    }

    if (length > 0) {
      break;
    }
  }

  return length;
}

console.log(lengthOfLastWord("Hello World")); // 5

console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4

console.log(lengthOfLastWord("luffy is still joyboy")); // 6
