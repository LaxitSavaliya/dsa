function clearDigits(s: string): string {
  const stack: string[] = [];

  for (const char of s) {
    if (char >= "0" && char <= "9") {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
}

console.log(clearDigits("abc")); //"abc"

console.log(clearDigits("cb3v43")); //""
