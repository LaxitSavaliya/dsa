function generate(numRows: number): number[][] {
  const result: number[][] = [[1]];

  for (let i = 0; i < numRows - 1; i++) {
    const temp: number[] = [];

    for (let j = 0; j <= result.length; j++) {
      const value: number = (result[i][j - 1] || 0) + (result[i][j] || 0);
      temp.push(value);
    }

    result.push(temp);
  }

  return result;
}

console.log(generate(5));

console.log(generate(6));
