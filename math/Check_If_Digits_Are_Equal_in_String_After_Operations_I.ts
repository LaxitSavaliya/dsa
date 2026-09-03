function hasSameDigits(s: string): boolean {
  let str = s;

  while (str.length > 2) {
    let temp = "";

    for (let i = 0; i < str.length - 1; i++) {
      temp += (Number(str[i]) + Number(str[i + 1])) % 10;
    }

    str = temp;
  }

  return str[0] === str[1];
}

console.log(hasSameDigits("3902")); //true

console.log(hasSameDigits("34789")); //false
