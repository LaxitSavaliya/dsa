// function reversePrefix(s: string, k: number): string {
//   const chars: string[] = [...s];

//   for (let i = 0; i < Math.floor(k / 2); i++) {
//     const oppositeIndex: number = k - 1 - i;

//     [chars[i], chars[oppositeIndex]] = [chars[oppositeIndex], chars[i]];
//   }

//   return chars.join("");
// }

// function reversePrefix(s: string, k: number): string {
//   const reversedPrefix: string = [...s.slice(0, k)].reverse().join("");
//   return reversedPrefix + s.slice(k);
// }

function reversePrefix(s: string, k: number): string {
  return [...s.slice(0, k)].reverse().join("") + s.slice(k);
}

console.log(reversePrefix("abcd", 2)); //"bacd"

console.log(reversePrefix("xyz", 3)); //"zyx"

console.log(reversePrefix("hey", 1)); //"hey"
