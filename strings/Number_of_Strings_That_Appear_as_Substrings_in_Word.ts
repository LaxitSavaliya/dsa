// function numOfStrings(patterns: string[], word: string): number {
//   let count: number = 0;

//   for (const pattern of patterns) {
//     if (word.includes(pattern)) {
//       count++;
//     }
//   }

//   return count;
// }

function numOfStrings(patterns: string[], word: string): number {
  return patterns.filter((pattern) => word.includes(pattern)).length;
}

console.log(numOfStrings(["a", "abc", "bc", "d"], "abc")); //3

console.log(numOfStrings(["a", "b", "c"], "aaaaabbbbb")); //2

console.log(numOfStrings(["a", "a", "a"], "ab")); //3
