function firstPalindrome(words: string[]): string {
  for (const word of words) {
    let left: number = 0;
    let right: number = word.length - 1;
    let isPalindrome: boolean = true;

    while (left < right) {
      if (word[left] !== word[right]) {
        isPalindrome = false;
        break;
      }

      left++;
      right--;
    }

    if (isPalindrome) {
      return word;
    }
  }

  return "";
}

console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"])); // "ada"

console.log(firstPalindrome(["notapalindrome", "racecar"])); // "racecar"

console.log(firstPalindrome(["def", "ghi"])); // ""
