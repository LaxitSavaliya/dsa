// function intToRoman(num: number): string {
//   let roman: string = "";
//   const str = String(num);

//   for (let i = 0; i < str.length; i++) {
//     const c = Number(str[i]) - 5;
//     let n = Math.min(Number(str[i]), Math.abs(c));
//     if (n > 3) {
//       n = 1;
//     }
//     let temp = "";
//     if (str.length - i === 4) {
//       for (let j = 0; j < n; j++) {
//         temp += "M";
//       }
//     } else if (str.length - i === 3) {
//       if (c >= 0 && c <= 3) {
//         temp += "D";
//       }
//       for (let j = 0; j < n; j++) {
//         temp += "C";
//       }
//       if (c === -1) {
//         temp += "D";
//       }
//       if (c > 3) {
//         temp += "M";
//       }
//     } else if (str.length - i === 2) {
//       if (c >= 0 && c <= 3) {
//         temp += "L";
//       }
//       for (let j = 0; j < n; j++) {
//         temp += "X";
//       }
//       if (c === -1) {
//         temp += "L";
//       }
//       if (c > 3) {
//         temp += "C";
//       }
//     } else if (str.length - i === 1) {
//       if (c >= 0 && c <= 3) {
//         temp += "V";
//       }
//       for (let j = 0; j < n; j++) {
//         temp += "I";
//       }
//       if (c === -1) {
//         temp += "V";
//       }
//       if (c > 3) {
//         temp += "X";
//       }
//     }

//     roman += temp;
//   }

//   return roman;
// }

// M

function intToRoman(num: number): string {
  let roman: string = "";
  const str = String(num);

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "1" || str[i] === "2" || str[i] === "3") {
      if (str.length - i === 4) {
        for (let j = 0; j < Number(str[i]); j++) {
          roman += "M";
        }
      } else if (str.length - i === 3) {
        for (let j = 0; j < Number(str[i]); j++) {
          roman += "C";
        }
      } else if (str.length - i === 2) {
        for (let j = 0; j < Number(str[i]); j++) {
          roman += "X";
        }
      } else if (str.length - i === 1) {
        for (let j = 0; j < Number(str[i]); j++) {
          roman += "I";
        }
      }
    } else if (str[i] === "4") {
      if (str.length - i === 3) {
        roman += "CD";
      } else if (str.length - i === 2) {
        roman += "XL";
      } else if (str.length - i === 1) {
        roman += "IV";
      }
    } else if (
      str[i] === "5" ||
      str[i] === "6" ||
      str[i] === "7" ||
      str[i] === "8"
    ) {
      const n = Number(str[i]) - 5;
      let temp = "";
      if (str.length - i === 3) {
        temp += "D";
        for (let j = 0; j < n; j++) {
          temp += "C";
        }
      } else if (str.length - i === 2) {
        temp += "L";
        for (let j = 0; j < n; j++) {
          temp += "X";
        }
      } else if (str.length - i === 1) {
        temp += "V";
        for (let j = 0; j < n; j++) {
          temp += "I";
        }
      }

      roman += temp;
    } else if (str[i] === "9") {
      if (str.length - i === 3) {
        roman += "CM";
      } else if (str.length - i === 2) {
        roman += "XC";
      } else if (str.length - i === 1) {
        roman += "IX";
      }
    }
  }

  return roman;
}

console.log(intToRoman(3749)); //"MMMDCCXLIX"

console.log(intToRoman(58)); //"LVIII"

console.log(intToRoman(3000)); //"MCMXCIV"
