function maxFreqSum(s: string): number {
  const vowels = new Set<string>(["a", "e", "i", "o", "u"]);
  const frequencies = new Map<string, number>();

  let maxVowel: number = 0;
  let maxConsonant: number = 0;

  for (const char of s) {
    const count: number = (frequencies.get(char) ?? 0) + 1;
    frequencies.set(char, count);

    if (vowels.has(char)) {
      // if (count > maxVowel) maxVowel = count;
      maxVowel = Math.max(maxVowel, count);
    } else {
      // if (count > maxConsonant) maxConsonant = count;
      maxConsonant = Math.max(maxConsonant, count);
    }
  }

  return maxVowel + maxConsonant;
}

console.log(maxFreqSum("successes")); //6

console.log(maxFreqSum("aeiaeia")); //3
