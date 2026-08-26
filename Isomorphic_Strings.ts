function isIsomorphic(s: string, t: string): boolean {
  const sToT = new Map<string, string>();
  const tToS = new Map<string, string>();

  for (let i = 0; i < s.length; i++) {
    if (
      (sToT.has(s[i]) && sToT.get(s[i]) !== t[i]) ||
      (tToS.has(t[i]) && tToS.get(t[i]) !== s[i])
    ) {
      return false;
    }

    sToT.set(s[i], t[i]);
    tToS.set(t[i], s[i]);
  }

  return true;
}

// e->a  g->d
// a->e  d->g
console.log(isIsomorphic("egg", "add")); //true

console.log(isIsomorphic("f11", "b23")); //flase

console.log(isIsomorphic("paper", "title")); //true

console.log(isIsomorphic("akcnmn", "badmpa")); //false

console.log(isIsomorphic("ab", "aa")); //false
