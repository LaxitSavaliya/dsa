function isAcronym(words: string[], s: string): boolean {
  if (words.length !== s.length) {
    return false;
  }

  for (let i = 0; i < words.length; i++) {
    if (!words[i].startsWith(s[i])) {
      return false;
    }
  }

  return true;
}

console.log(isAcronym(["alice", "bob", "charlie"], "abc")); //true

console.log(isAcronym(["an", "apple"], "a")); //false

console.log(isAcronym(["never", "gonna", "give", "up", "on", "you"], "ngguoy")); //true
