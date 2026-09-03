function romanToInt(s: string): number {
  const record: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let num: number = 0;

  for (let i = 0; i < s.length; i++) {
    const current: number = record[s[i]]!;
    const next: number | undefined = record[s[i + 1]];

    if (next !== undefined && next > current) {
      num -= current;
    } else {
      num += current;
    }
  }

  // let i: number = s.length - 1;

  // while (i >= 0) {
  //   const current: number = record[s[i]]!;
  //   const previous: number | undefined = record[s[i - 1]];

  //   if (previous !== undefined && current > previous) {
  //     num += current - previous;
  //     i -= 2;
  //   } else {
  //     num += current;
  //     i--;
  //   }
  // }

  return num;
}

console.log(romanToInt("III")); //3

console.log(romanToInt("LVIII")); //58
// 1 + 1 + 1 + 5 + 50;
// 3 + 5 + 50;
// 58;

console.log(romanToInt("MCMXCIV")); //1994
// 5 + 1 + 100 + 10 + 1000 + 100 + 1000;
// 4 + 90 + 900 + 1000;
// 1994;

// MMMCMXCIX;

// 10 + 1 + 100 + 10 + 1000 + 100 + 1000 + 1000 + 1000;
// 9 + 90 + 900 + 3000;
