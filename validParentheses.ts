function isValid(s: string): boolean {
  const stack: string[] = [];

  for (const char of s) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
      continue;
    }

    if (stack.length === 0) {
      return false;
    }

    const last = stack[stack.length - 1];
    if (
      (char === ")" && last !== "(") ||
      (char === "]" && last !== "[") ||
      (char === "}" && last !== "{")
    ) {
      return false;
    }

    stack.pop();
  }

  return stack.length === 0;
}

console.log(isValid("()"));
// true

console.log(isValid("()[]{}"));
// true

console.log(isValid("(]"));
// false

console.log(isValid("([{}])"));
// true

console.log(isValid("([)]"));
// false

console.log(isValid("{[]}"));
// true

console.log(isValid("}"));
// false

console.log(isValid("("));
// false

console.log(isValid(""));
// true
