function restoreString(s: string, indices: number[]): string {
  const result: string[] = new Array<string>(s.length);

  for (let i = 0; i < s.length; i++) {
    result[indices[i]] = s[i];
  }

  return result.join("");
}

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3])); //"leetcode"

console.log(restoreString("eplpa", [4, 1, 3, 2, 0])); //"apple"

console.log(restoreString("abc", [0, 1, 2])); //"abc"
