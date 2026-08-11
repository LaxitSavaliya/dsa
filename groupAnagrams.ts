function groupAnagrams(strs: string[]): string[][] {
  const groups = new Map<string, string[]>();

  for (const word of strs) {
    const count = new Array<number>(26).fill(0);

    for (const char of word) {
      const index = char.charCodeAt(0) - 97;
      count[index]++;
    }

    const key = count.join("#");
    const group = groups.get(key);

    if (group === undefined) {
      groups.set(key, [word]);
    } else {
      group.push(word);
    }
  }

  return [...groups.values()];
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [
//   ["bat"],
//   ["nat", "tan"],
//   ["ate", "eat", "tea"]
// ]

console.log(groupAnagrams([""]));
// [[""]]

console.log(groupAnagrams(["a"]));
// [["a"]]

console.log(groupAnagrams(["ab", "ba", "abc", "cab", "bca"]));
// [["ab", "ba"], ["abc", "cab", "bca"]]
