function titleToNumber(columnTitle: string): number {
  const getLetterValue = (char: string): number =>
    char.toLowerCase().charCodeAt(0) - 96;

  let result: number = 0;

  for (let i = 0; i < columnTitle.length; i++) {
    let temp: number = 1;
    for (let j = 1; j < columnTitle.length - i; j++) {
      temp *= 26;
    }

    result += temp * getLetterValue(columnTitle[i]);
  }

  return result;
}

console.log(titleToNumber("A")); // 1

console.log(titleToNumber("AB")); // 27

console.log(titleToNumber("ADSW")); //701
