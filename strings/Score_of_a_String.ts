function scoreOfString(s: string): number {
  let score: number = 0;
  for (let i = 0; i < s.length - 1; i++) {
    score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
  }

  return score;
}

console.log(scoreOfString("hello")); //13

console.log(scoreOfString("zaz")); //50
