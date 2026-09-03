function maximumOddBinaryNumber(s: string): string {
  let ones: number = 0;

  for (const char of s) {
    if (char === "1") ones++;
  }

  return "1".repeat(ones - 1) + "0".repeat(s.length - ones) + "1";
}

console.log(maximumOddBinaryNumber("010")); //001

console.log(maximumOddBinaryNumber("0101")); //1001
