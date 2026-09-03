function toLowerCase(s: string): string {
  // return s.toLowerCase();

  let result: string = "";

  for (const char of s) {
    const code: number = char.charCodeAt(0);

    if (code >= 65 && code <= 90) {
      result += String.fromCharCode(code + 32);
    } else {
      result += char;
    }
  }

  return result;
}

console.log(toLowerCase("Hello")); //"hello"

console.log(toLowerCase("here")); //"here"

console.log(toLowerCase("LOVELY")); //"lovely"
