function getRow(numRows: number): number[] {
  let result: number[] = [1];

  for (let i = 0; i < numRows; i++) {
    const temp: number[] = [];

    for (let j = 0; j <= result.length; j++) {
      const value: number = (result[j - 1] || 0) + (result[j] || 0);
      temp.push(value);
    }

    result = temp;
  }

  return result;
}

console.log(getRow(3));

console.log(getRow(6));
