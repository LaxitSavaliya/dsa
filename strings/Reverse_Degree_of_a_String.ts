function reverseDegree(s: string): number {
  let reverseDegree: number = 0;
  for (let i = 0; i < s.length; i++) {
    reverseDegree += (123 - s.charCodeAt(i)) * (i + 1);
  }

  return reverseDegree;
}

console.log(reverseDegree("abc")); //148

console.log(reverseDegree("zaza")); //160
