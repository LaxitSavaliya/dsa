function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const sToT = new Map<string, string>();
  const tToS = new Map<string, string>();

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if (sToT.has(sChar) && sToT.get(sChar) !== tChar) {
      return false;
    }

    if (tToS.has(tChar) && tToS.get(tChar) !== sChar) {
      return false;
    }

    sToT.set(sChar, tChar);
    tToS.set(tChar, sChar);
  }

  return true;
}

console.log(isIsomorphic("egg", "add")); // true
console.log(isIsomorphic("foo", "bar")); // false
console.log(isIsomorphic("paper", "title")); // true
console.log(isIsomorphic("badc", "baba")); // false
