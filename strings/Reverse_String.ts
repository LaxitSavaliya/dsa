/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  for (let i = 0; i < s.length / 2; i++) {
    const temp = s[i];
    s[i] = s[s.length - i - 1];
    s[s.length - i - 1] = temp;
  }
}

console.log(reverseString(["h", "e", "l", "l", "o"])); //["o","l","l","e","h"]

console.log(reverseString(["H", "a", "n", "n", "a", "h"])); //["h","a","n","n","a","H"]
