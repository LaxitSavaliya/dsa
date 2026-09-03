function checkIfPangram(sentence: string): boolean {
  const seen = new Set<string>();

  for (const char of sentence) seen.add(char);

  return seen.size === 26;
}

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog")); //true

console.log(checkIfPangram("leetcode")); //false
