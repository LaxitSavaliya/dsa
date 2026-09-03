function balancedStringSplit(s: string): number {
  let result: number = 0;
  let balance: number = 0;

  for (const char of s) {
    if (char === "R") {
      balance++;
    } else {
      balance--;
    }

    if (balance === 0) result++;
  }

  return result;
}

console.log(balancedStringSplit("RLRRLLRLRL")); //4

console.log(balancedStringSplit("RLRRRLLRLL")); //2

console.log(balancedStringSplit("LLLLRRRR")); //1
