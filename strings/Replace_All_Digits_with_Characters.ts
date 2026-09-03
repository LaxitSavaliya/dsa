function replaceDigits(s: string): string {
  let result: string = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] >= "0" && s[i] <= "9") {
      const previousLetterCode: number = s[i - 1].charCodeAt(0);
      result += String.fromCharCode(previousLetterCode + Number(s[i]));
    } else {
      result += s[i];
    }
  }

  return result;
}

console.log(replaceDigits("a1c1e1")); //"abcdef"

console.log(replaceDigits("a1b2c3d4e")); //"abbdcfdhe"
