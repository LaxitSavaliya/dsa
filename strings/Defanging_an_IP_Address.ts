function defangIPaddr(address: string): string {
  let result: string = "";

  for (const char of address) {
    result += char === "." ? "[.]" : char;
  }

  return result;
}

console.log(defangIPaddr("1.1.1.1")); //"1[.]1[.]1[.]1"

console.log(defangIPaddr("255.100.50.0")); //"255[.]100[.]50[.]0"
