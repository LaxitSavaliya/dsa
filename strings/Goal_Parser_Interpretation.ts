function interpret(command: string): string {
  let result: string = "";
  let i: number = 0;

  while (i < command.length) {
    if (command[i] === "G") {
      result += "G";
      i++;
    } else if (command[i + 1] === ")") {
      result += "o";
      i += 2;
    } else {
      result += "al";
      i += 4;
    }
  }

  return result;
}

console.log(interpret("G()(al)")); //"Goal"

console.log(interpret("G()()()()(al)")); //"Gooooal"

console.log(interpret("(al)G(al)()()G")); //"alGalooG"
