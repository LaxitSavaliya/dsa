function reverseByType(s: string): string {
  const letters: string[] = [];
  const symbols: string[] = [];

  for (const char of s) {
    if (char >= "a" && char <= "z") {
      letters.push(char);
    } else {
      symbols.push(char);
    }
  }

  let result: string = "";

  for (const char of s) {
    if (char >= "a" && char <= "z") {
      result += letters.pop();
    } else {
      result += symbols.pop();
    }
  }

  return result;
}

console.log(reverseByType(")ebc#da@f(")); // "(fad@cb#e)"

console.log(reverseByType("z")); // "z"

console.log(reverseByType("!@#$%^&*()")); // ")(*&^%$#@!"
