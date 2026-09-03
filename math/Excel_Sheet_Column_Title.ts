function convertToTitle(columnNumber: number): string {
  const result: string[] = [];
  let remaining: number = columnNumber;

  while (remaining > 0) {
    let value: number = remaining % 26;

    if (value === 0) {
      value = 26;
    }

    result.unshift(String.fromCharCode(value + 96));

    remaining = (remaining - value) / 26;
  }

  return result.join("").toLocaleUpperCase();
}

console.log(convertToTitle(2147483647)); // A

console.log(convertToTitle(28)); // AB
// 25
// 676
console.log(convertToTitle(701)); // ZY
