function numJewelsInStones(jewels: string, stones: string): number {
  const set = new Set<string>(jewels);
  let count: number = 0;
  for (const stone of stones) {
    if (set.has(stone)) count++;
  }

  return count;
}

console.log(numJewelsInStones("aA", "aAAbbbb")); //3

console.log(numJewelsInStones("z", "ZZ")); //0
