function cellsInRange(s: string): string[] {
  const result: string[] = [];

  const startColumn: number = s[0].charCodeAt(0);
  const endColumn: number = s[3].charCodeAt(0);
  const startRow: number = Number(s[1]);
  const endRow: number = Number(s[4]);

  for (let column = startColumn; column <= endColumn; column++)
    for (let row = startRow; row <= endRow; row++)
      result.push(String.fromCharCode(column) + row);

  return result;
}

console.log(cellsInRange("K1:L2")); //["K1","K2","L1","L2"]

console.log(cellsInRange("A1:F1")); //["A1","B1","C1","D1","E1","F1"]
