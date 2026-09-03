// function convert(s: string, numRows: number): string {
//   let a: string = "";
//   for (let i = 0; i < numRows; i++) {
//     let k: number = 2 * (numRows - i - 1);
//     let n: number = 2 * i;

//     let j: number = i;
//     let useK: boolean = true;

//     while (j < s.length) {
//       if (useK || (i !== 0 && i !== numRows - 1)) {
//         a += s[j];
//       }

//       if (useK) {
//         j += k;
//       } else {
//         j += n;
//       }

//       useK = !useK;
//     }
//   }

//   return a;
// }

function convert(s: string, numRows: number): string {
  if (numRows === 1 || numRows >= s.length) {
    return s;
  }

  const rows = Array(numRows).fill("");

  let row: number = 0;
  let direction: number = 1;

  for (let i = 0; i < s.length; i++) {
    rows[row] += s[i];

    if (row === 0) {
      direction = 1;
    } else if (row === numRows - 1) {
      direction = -1;
    }

    row += direction;
  }

  return rows.join("");
}

console.log(convert("A", 3)); //PAHNAPLSIIGYIR
// "PINALSIGYAHRP"

console.log(convert("PAYPALISHIRING", 4)); //PINALSIGYAHRPI  14

// P     I    N
// A   L S  I G
// Y A   H R
// P     I
