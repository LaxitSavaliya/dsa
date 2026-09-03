function isHappy(n: number): boolean {
  const seen = new Set<number>();

  let num: string = String(n);

  while (true) {
    let temp: number = 0;
    for (let i = 0; i < num.length; i++) {
      temp += Number(num[i]) * Number(num[i]);
    }

    if (seen.has(temp)) {
      return false;
    }

    if (temp === 1) {
      return true;
    }

    seen.add(temp);

    num = String(temp);
  }
}

console.log(isHappy(19)); // true

console.log(isHappy(2)); // false
