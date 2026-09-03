function freqAlphabets(s: string): string {
  let str = "";
  let i = 0;

  while (i < s.length) {
    if (s[i + 2] === "#") {
      str += String.fromCharCode(Number(s[i] + s[i + 1]) + 96);
      i += 3;
    } else {
      str += String.fromCharCode(Number(s[i]) + 96);
      i++;
    }
  }

  return str;
}

console.log(freqAlphabets("10#11#12")); // "jkab"

console.log(freqAlphabets("1326#")); // "abz"
