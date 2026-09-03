function isPalindrome(s: string): boolean {
  const str: string = s.trim().toLowerCase();

  let left: number = 0;
  let right: number = str.length - 1;

  while (left < right) {
    const leftIsAlphaNumeric: boolean =
      (str[left] >= "a" && str[left] <= "z") ||
      (str[left] >= "0" && str[left] <= "9");

    if (!leftIsAlphaNumeric) {
      left++;
      continue;
    }

    const rightIsAlphaNumeric: boolean =
      (str[right] >= "a" && str[right] <= "z") ||
      (str[right] >= "0" && str[right] <= "9");

    if (!rightIsAlphaNumeric) {
      right--;
      continue;
    }

    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true

console.log(isPalindrome("race a car")); // flase

console.log(isPalindrome("a.,a"));

console.log(isPalindrome("1p1"));
