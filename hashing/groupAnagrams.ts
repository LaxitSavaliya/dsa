function groupAnagrams(strs: string[]): string[][] {
  const groups: Map<string, string[]> = new Map<string, string[]>();

  for (const word of strs) {
    const count: Array<number> = new Array<number>(26).fill(0);

    for (const char of word) {
      const index: number = char.charCodeAt(0) - 97;
      count[index]++;
    }

    const key: string = count.join("#");
    const group: string[] | undefined = groups.get(key);

    if (group === undefined) {
      groups.set(key, [word]);
      continue;
    }

    group.push(word);
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
