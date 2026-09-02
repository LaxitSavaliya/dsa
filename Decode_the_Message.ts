function decodeMessage(key: string, message: string): string {
  const decoder = new Map<string, string>([[" ", " "]]);

  for (const char of key) {
    if (decoder.has(char)) continue;

    decoder.set(char, String.fromCharCode(96 + decoder.size));

    if (decoder.size === 27) break;
  }

  let result: string = "";

  for (const char of message) {
    result += decoder.get(char)!;
  }

  return result;
}

console.log(
  decodeMessage(
    "the quick brown fox jumps over the lazy dog",
    "vkbs bs t suepuv",
  ),
); //"this is a secret"

console.log(
  decodeMessage(
    "eljuxhpwnyrdgtqkviszcfmabo",
    "zwx hnfx lqantp mnoeius ycgk vcnjrdb",
  ),
); //"the five boxing wizards jump quickly"
