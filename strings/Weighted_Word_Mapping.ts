function mapWordWeights(words: string[], weights: number[]): string {
  let str: string = "";

  for (const word of words) {
    let total: number = 0;

    for (let i = 0; i < word.length; i++) {
      total += weights[word.charCodeAt(i) - 97];
    }

    str += String.fromCharCode(122 - (total % 26));
  }

  return str;
}

console.log(
  mapWordWeights(
    ["abcd", "def", "xyz"],
    [
      5, 3, 12, 14, 1, 2, 3, 2, 10, 6, 6, 9, 7, 8, 7, 10, 8, 9, 6, 9, 9, 8, 3,
      7, 7, 2,
    ],
  ),
); //"rij"

console.log(
  mapWordWeights(
    ["a", "b", "c"],
    [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1,
    ],
  ),
); //"yyy"

console.log(
  mapWordWeights(
    ["abcd"],
    [
      7, 5, 3, 4, 3, 5, 4, 9, 4, 2, 2, 7, 10, 2, 5, 10, 6, 1, 2, 2, 4, 1, 3, 4,
      4, 5,
    ],
  ),
); //"g"
