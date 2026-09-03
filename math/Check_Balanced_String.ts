function isBalanced(num: string): boolean {
  let balance: number = 0;

  for (let i = 0; i < num.length; i++) {
    if (i % 2 === 0) {
      balance += Number(num[i]);
    } else {
      balance -= Number(num[i]);
    }
  }

  return balance === 0;
}

console.log(isBalanced("1234")); //false

console.log(isBalanced("24123")); //true
