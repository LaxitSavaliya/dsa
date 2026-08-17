// function intToRoman(num: number): string {
//   let roman: string = "";
//   const str = String(num);

//   const one = ["", "I", "X", "C", "M"];
//   const five = ["", "V", "L", "D"];
//   const ten = ["", "X", "C", "M"];

//   for (let i = 0; i < str.length; i++) {
//     const digit = Number(str[i]);
//     const place = str.length - i;
//     const n =
//       digit !== 4 ? (digit > 4 ? (digit > 8 ? 1 : digit - 5) : digit) : 1;

//     let a = "";
//     let b = "";

//     if (digit >= 4) {
//       if (digit === 4) {
//         b += five[place];
//       } else if (digit === 9) {
//         b += ten[place];
//       } else {
//         a += five[place];
//       }
//     }

//     for (let j = 0; j < n; j++) {
//       a += one[place];
//     }

//     const c = a + b;
//     roman += c;
//   }

//   return roman;
// }

function intToRoman(num: number): string {
  const str: string = String(num);
  let roman: string = "";

  const one: string[] = ["", "I", "X", "C", "M"];
  const five: string[] = ["", "V", "L", "D"];
  const ten: string[] = ["", "X", "C", "M"];

  for (let i = 0; i < str.length; i++) {
    const digit: number = Number(str[i]);
    const place: number = str.length - i;

    if (digit <= 3) {
      roman += one[place].repeat(digit);
    } else if (digit === 4) {
      roman += one[place] + five[place];
    } else if (digit <= 8) {
      roman += five[place] + one[place].repeat(digit - 5);
    } else {
      roman += one[place] + ten[place];
    }
  }

  return roman;
}

console.log(intToRoman(3749)); //"MMMDCCXLIX"

console.log(intToRoman(58)); //"LVIII"

console.log(intToRoman(3000)); //"MCMXCIV"
