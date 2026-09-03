function kthDistinct(arr: string[], k: number): string {
  const frequency = new Map<string, number>();

  for (const word of arr) {
    frequency.set(word, (frequency.get(word) ?? 0) + 1);
  }

  for (const word of arr) {
    if (frequency.get(word) === 1) {
      k--;

      if (k === 0) {
        return word;
      }
    }
  }

  return "";
}

console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2)); //"a"

console.log(kthDistinct(["aaa", "aa", "a"], 1)); //"aaa"

console.log(kthDistinct(["a", "b", "a"], 3)); //""
