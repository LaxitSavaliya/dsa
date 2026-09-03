function countPoints(rings: string): number {
  const map = new Map<string, Set<string>>();

  for (let i = 0; i < rings.length; i += 2) {
    const colors = map.get(rings[i + 1]) ?? new Set<string>();

    colors.add(rings[i]);
    map.set(rings[i + 1], colors);
  }

  let result: number = 0;

  for (const colors of map.values()) {
    if (colors.size === 3) {
      result++;
    }
  }

  return result;
}

console.log(countPoints("B0B6G0R6R0R6G9")); //1

console.log(countPoints("B0R0G0R9R0B0G0")); //1

console.log(countPoints("G4")); //0
